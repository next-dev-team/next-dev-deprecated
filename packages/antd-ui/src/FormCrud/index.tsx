import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import useCreation from 'ahooks/es/useCreation';
import useMemoizedFn from 'ahooks/es/useMemoizedFn';
import useReactive from 'ahooks/es/useReactive';
import useRequest from 'ahooks/es/useRequest';
import React, { ReactNode, useMemo, useState } from 'react';

import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import {
  ActionType,
  BetaSchemaForm,
  ProColumnType,
  ProDescriptionsProps,
  ProFieldValueObjectType,
  ProFormInstance,
  ProFormUploadDragger,
  ProTableProps,
} from '@ant-design/pro-components/es';

import Button from 'antd/es/button';
import Popconfirm from 'antd/es/popconfirm';
import Spin from 'antd/es/spin';
import Tabs from 'antd/es/tabs';
import Tag from 'antd/es/tag';
import Tooltip from 'antd/es/tooltip';

import { Image, TagProps } from 'antd';
import Upload, { RcFile, UploadFile } from 'antd/es/upload';
import {
  _initConfigAxios,
  _requestAxios,
  _requestDelete,
} from 'next-dev-utils/es/_request';
import { _capitalize } from 'next-dev-utils/es/__capitalize';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type ITabMode = 'form' | 'table' | 'descriptions';
type ICrudMode = 'list' | 'add' | 'edit' | 'view' | 'delete';
type IFilter = {
  page?: number;
  pageSize?: number;
};

export type IFormCrudState<U = IFilter> = {
  tabMode: ITabMode;
  crudMode: ICrudMode;
  record: Record<string, any>;
  openModalForm?: boolean;
  editLoading?: boolean;
  deleteLoading?: boolean;
  addLoading?: boolean;
  filter: U;
  fileList: Array<any>;
} & Record<string, any>;

type Actions<T> = {
  /**
   * will hide all action colum
   */
  hideActionCol?: boolean;
  isHideView?: boolean;
  isHideAdd?: boolean;
  isHideEdit?: boolean;
  isHideDelete?: boolean;
  isShowOptMenu?: boolean;
  moreMenu?: ReactNode[];
  moreOptMenu?: (
    value: T,
  ) => React.ComponentProps<typeof TableDropdown>['menus'];
};

export type IFormCrud<
  T extends Record<string, any>,
  U = IFilter,
  ValueType = any,
> = ProTableProps<T, U, ValueType> & {
  onSetMode?: (opt: {
    record: T;
    tabMode: ITabMode;
    crudMode: ICrudMode;
    isFormFinished?: boolean;
  }) => Promise<void>;
  /**
   * required return promise
   */
  onFormAddFinished?: (formValue: T & { record: T }) => Promise<any>;
  /**
   * required return promise
   */
  onFormEditFinished?: (formValue: T & { record: T }) => Promise<any>;
  onDeleteFinished?: (formValue: T & { record: T }) => Promise<any>;
  isDebug?: boolean;

  /**
   * custom record id for delete or detail param
   * @default id
   */
  recordId?: string | number;
  /**
   * all related action props
   */
  actions?: Actions<T>;
  formType?: 'tab' | 'modal';
  form: ProFormInstance<T>;
  texts?: {
    tabAddText?: string;
  };
  requestConfig?: (
    value: T & { record: T } & Record<any, any>,
  ) => typeof _initConfigAxios & {
    isFormManualUpload?: boolean;
    deleteUrl?: string;
    editUrl?: string;
    editParam?: Partial<U>;
    editMethod?: string;
    getConfig?: {
      requestReturn: {
        data: T[];
        success?: boolean;
        total?: number | undefined;
      };
      url?: string;
      method?: string;
      params?: Partial<T>;
    };
    addConfig?: {
      url?: string;
      method?: string;
      params?: Partial<T>;
    };
  };
  descriptionsProps?: ProDescriptionsProps;
  moreToolBarRender?: (record: T) => ReactNode[];
};

export const dfState: IFormCrudState<IFilter> = {
  crudMode: 'list',
  tabMode: 'table',
  record: {},
  addLoading: false,
  editLoading: false,
  deleteLoading: false,
  filter: {},
  openModalForm: false,
  fileList: [],
};

export default function FormCrud<
  T extends Record<string, any>,
  U = any,
  ValueType = ProColumnType,
>(props: IFormCrud<T, U, ValueType>) {
  const {
    columns = [],
    onSetMode,
    recordId,
    onFormAddFinished,
    onFormEditFinished,
    onDeleteFinished,
    actions = {},
    actionRef,
    formType = 'modal',
    form,
    descriptionsProps,
    requestConfig,
    moreToolBarRender = () => [],
    ...rest
  } = props;
  const state = useReactive<IFormCrudState<IFilter>>({ ...dfState });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const resetState = () => {
    state.openModalForm = false;
    state.record = {};
    state.fileList = [];
  };

  const deleteAction = () => {
    const requestCon = requestConfig?.(state?.record as any) || {};
    return _requestDelete(requestCon?.deleteUrl as string, requestCon as any);
  };

  // auto mode if not provide onDeleteFinished
  const { run: runDelete, loading: loadingDelete } = useRequest(deleteAction, {
    manual: true,
    onSuccess: () => {
      _actionRef.current?.reload();
    },
  });

  const editAction = () => {
    const requestCon = requestConfig?.(state?.record as any) || {};
    return _requestAxios(
      requestCon?.editUrl as string,
      {
        ...requestCon,
        method: requestCon?.editMethod || 'post',
        params: requestCon?.editParam,
      } as any,
    );
  };

  // auto mode if not provide onDeleteFinished
  const { run: runEdit, loading: loadingEdit } = useRequest(editAction, {
    manual: true,
    onSuccess: (res) => {
      console.log('res edit: ', res);

      if (res?.data) {
        state.openModalForm = false;
        _actionRef.current?.reload();
      }
    },
    onFinally: () => {},
  });
  const addAction = () => {
    const requestCon = requestConfig?.(state?.record as any) || {};
    return _requestAxios(
      requestCon?.addConfig?.url as string,
      {
        ...requestCon,
        method: requestCon?.addConfig?.method || 'post',
        params: requestCon?.addConfig?.params,
      } as any,
    );
  };

  // auto mode if not provide onDeleteFinished
  const { run: runAdd, loading: loadingAdd } = useRequest(addAction, {
    manual: true,
    onSuccess: () => {
      state.openModalForm = false;
      state.record = {};
      state.fileList = [];
      _actionRef.current?.reload();
    },
  });

  const _actionRef: { current: ActionType } = actionRef as any;
  const isModeForm = formType === 'modal';
  // const isFormMode = type === 'form';
  // const isTableMode = type === 'table';
  const isDescriptions = useCreation(
    () => state.tabMode === 'descriptions' || state.crudMode === 'view',
    [state.tabMode, state.crudMode],
  );

  const descriptions = `Record: (${state.record?.id || recordId})`;
  const formTabTitle = 'Add';
  const tableTabTitle = 'List';
  // const isListMode = state?.crudMode === 'list';

  // set tab and crud mode
  const onClickSetMode = useMemoizedFn(
    async (
      type: ICrudMode | ITabMode,
      record = {},
      isFormFinished?: boolean,
    ) => {
      let crudMode: ICrudMode = 'list';
      let tabMode: ITabMode = 'table';

      state.record = record;

      if (type === 'view') {
        crudMode = 'view';
        tabMode = 'descriptions';
        state.openModalForm = isModeForm;
        if (isFormFinished) {
          state.openModalForm = false;
        }
      }

      if (type === 'edit') {
        form?.setFieldsValue?.(record);
        crudMode = 'edit';
        tabMode = 'form';
        state.openModalForm = isModeForm;
        if (isFormFinished) {
          if (onFormEditFinished) {
            state.editLoading = true;
            onFormEditFinished?.(record)
              .then(() => {
                // close modal
                resetState();
                state.editLoading = false;
                _actionRef.current?.reload();
              })
              .finally(() => {
                // close modal
                state.editLoading = false;
              });
          } else {
            runEdit();
          }
        }
      }

      if (type === 'delete') {
        crudMode = 'delete';
        tabMode = 'table';
        console.log('onClick deleted');

        if (isFormFinished) {
          if (onDeleteFinished) {
            state.deleteLoading = true;
            onDeleteFinished?.({ ...record, record })
              .then(() => {
                _actionRef.current?.reload();
              })
              .finally(() => {
                state.deleteLoading = false;
              });
          } else {
            runDelete();
          }
        }
      }

      if (type === 'add') {
        crudMode = 'add';
        tabMode = 'form';
        state.openModalForm = isModeForm;
        form?.resetFields();

        if (isFormFinished) {
          if (onFormAddFinished) {
            state.addLoading = true;
            onFormAddFinished?.(record)
              .then(() => {
                // close modal
                resetState();
                state.addLoading = false;
                _actionRef.current?.reload(true);
              })
              .finally(() => {
                // close modal
                state.addLoading = false;
              });
          } else {
            runAdd();
          }
        }
      }
      state.crudMode = crudMode;
      if (!isModeForm) {
        state.tabMode = tabMode;
      }

      // set mode and value
      onSetMode?.({
        crudMode,
        record,
        tabMode,
        isFormFinished,
      });
      console.log('state', state);
    },
  );

  const actionOptMenu = useMemoizedFn((value: T) => [
    // { key: 'copy', name: 'copy', icon: <EditOutlined /> },
    ...(actions?.moreOptMenu?.(value) || []),
  ]);

  type CustomRenderType = 'tag';

  const actionWidth = 130;

  type IFormCrudColumn = typeof columns['0'] & {
    customRenderType?:
      | CustomRenderType
      | {
          customRenderType?: CustomRenderType;
          tagsProps?: TagProps;
        };
  };

  const newCol = useMemo(() => {
    const getCol = columns?.map((i) => {
      const newItem: IFormCrudColumn = i;
      const isTag = newItem?.customRenderType === 'tag';

      // custom render tag
      const renderTag = isTag
        ? {
            render: (_: string, row: any) => {
              const succColor = ['published', 'success', 'active'];
              const errColor = ['failed', 'error', 'not found', 'inactive'];
              const warnColor = ['draft', 'pending', 'in-progress'];
              //@ts-ignore
              const renderText: string = row?.[i?.dataIndex] ?? '';
              // console.log('_',renderText);

              const tagsProps =
                typeof newItem?.customRenderType === 'object'
                  ? newItem?.customRenderType?.tagsProps
                  : {};

              return (
                <Tag
                  {...tagsProps}
                  style={{ textAlign: 'center', ...tagsProps?.style }}
                  color={
                    tagsProps?.color ||
                    (succColor.includes(renderText) && 'success') ||
                    (errColor.includes(renderText) && 'red') ||
                    (warnColor.includes(renderText) && 'orange') ||
                    'default'
                  }
                >
                  {_capitalize(renderText)}
                </Tag>
              );
            },
          }
        : {};

      const valueType =
        typeof newItem?.valueType === 'object'
          ? ((newItem?.valueType as any)
              ?.type as ProFieldValueObjectType['type'])
          : newItem?.valueType;

      const isValueIsImg = valueType === 'image';
      const requestCon = requestConfig?.(state?.record as any) || {};

      const uploadProps = {
        onError(err: any) {
          console.log('onError', err);
        },
        async customRequest({ file }) {
          const formData = new FormData();
          const formName = newItem?.formItemProps?.name as string;
          if (formName) {
            formData.append(formName, file);
            state[formName] = formData;
          }
        },
      } as typeof Upload.defaultProps;

      const renderValueImage: IFormCrudColumn = isValueIsImg
        ? {
            renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
              const formName =
                newItem?.formItemProps?.name ?? newItem?.dataIndex;

              console.log('form', state.record);

              if (!formName) {
                console.error('missing form name');
              }

              return (
                <>
                  <ProFormUploadDragger
                    label={newItem?.title}
                    name={formName}
                    action={
                      (requestCon?.baseURL as any) +
                      (requestCon?.editUrl as any)
                    }
                    formItemProps={{
                      ...newItem?.formItemProps,
                    }}
                    fieldProps={{
                      style: {
                        marginBottom: 8,
                        //@ts-ignore
                        ...(newItem?.fieldProps?.style ?? {}),
                      },
                      headers: {
                        ...(requestCon?.headers as any),
                      },
                      listType: 'picture-card',
                      // manual upload when submit

                      ...(!requestCon?.isFormManualUpload ? {} : uploadProps),
                      onPreview: async (file: UploadFile) => {
                        if (!file.url && !file.preview) {
                          file.preview = await getBase64(
                            file.originFileObj as RcFile,
                          );
                        }

                        setPreviewImage(file.url || (file.preview as string));
                        setPreviewOpen(true);
                        setPreviewTitle(
                          file.name ||
                            file.url!.substring(file.url!.lastIndexOf('/') + 1),
                        );
                      },
                      ...(newItem?.fieldProps ?? ({} as any)),

                      fileList:
                        state.fileList?.length > 0
                          ? state.fileLis
                          : // @ts-ignore
                          state?.record?.[newItem?.dataIndex]
                          ? [
                              {
                                // @ts-ignore
                                url: state?.record?.[newItem?.dataIndex],
                                name: newItem?.dataIndex,
                                // @ts-ignore
                                uid: state?.record?.[newItem?.dataIndex],
                              },
                            ]
                          : [],
                      onChange(info) {
                        if (requestCon?.isFormManualUpload) {
                          info.file.status = 'done';
                        }
                        console.log('on file', requestCon?.isFormManualUpload);
                        state.fileList = [...state.fileList, ...info?.fileList];
                      },
                    }}
                  />
                  <Image
                    alt="preview"
                    style={{ display: 'none' }}
                    preview={{
                      src: previewImage,
                      visible: previewOpen,
                      onVisibleChange: (value) => {
                        setPreviewOpen(value);
                      },
                    }}
                  />
                </>
              );
            },
            ignoreFormItem: true,
          }
        : {};

      return {
        hideInSearch: true,
        ...renderTag,
        ...renderValueImage,
        ...i,
      };
    });

    return [
      ...getCol,
      ...(actions?.hideActionCol
        ? []
        : [
            {
              title: 'Actions',
              align: 'center',
              dataIndex: 'actions',
              hideInForm: true,
              hideInSearch: true, // change df to true
              valueType: 'option',
              fixed: 'right',
              width: actionWidth,
              key: 'actions',
              render: (_: any, record: T) => [
                ...(actions?.isHideView
                  ? []
                  : [
                      <Tooltip title="view" key="view">
                        <EyeOutlined
                          disabled={state.openModalForm}
                          style={{
                            color: state.openModalForm ? 'gray' : 'blue',
                            fontSize: 18,
                            cursor: state.openModalForm
                              ? 'not-allowed'
                              : 'pointer',
                          }}
                          onClick={() => {
                            !state.openModalForm &&
                              onClickSetMode('view', record);
                          }}
                        />
                      </Tooltip>,
                    ]),
                ,
                ...(actions?.isHideEdit
                  ? []
                  : [
                      <Tooltip title="edit" key="edit">
                        <EditOutlined
                          style={{
                            color: 'orange',
                            fontSize: 18,
                          }}
                          onClick={() => onClickSetMode('edit', record)}
                        />
                      </Tooltip>,
                    ]),
                <Popconfirm
                  title="Are you sure to delete it?"
                  onConfirm={() => onClickSetMode('delete', record, true)}
                >
                  <Spin
                    size="small"
                    spinning={
                      (state.deleteLoading || loadingDelete) &&
                      record?.id === state.record?.id
                    }
                  >
                    <DeleteOutlined
                      style={{ color: 'red', fontSize: 18, cursor: 'pointer' }}
                    />
                  </Spin>
                </Popconfirm>,
                (actions?.isShowOptMenu ||
                  //@ts-ignore
                  actions?.moreOptMenu?.(record)?.length > 0) && (
                  <TableDropdown
                    key="actionGroup"
                    menus={actionOptMenu(record)}
                  />
                ),
              ],
            } as typeof columns[0],
          ]),
    ];
  }, [
    actionOptMenu,
    actions,
    columns,
    loadingDelete,
    onClickSetMode,
    previewImage,
    previewOpen,
    requestConfig,
    state,
  ]);

  const isHasSearch = useCreation(
    () => newCol.find((i) => !i?.hideInSearch),
    [newCol],
  );

  // console.log('columns');

  const renderTbl = (
    <ProTable<T>
      type={state.tabMode as 'table'}
      rowKey="id"
      dateFormatter="string"
      actionRef={actionRef}
      // request is auto mode super fast for CRUD operation
      request={async (params, filter, sorter) => {
        const paginate = { params, filter, sorter };
        console.log('change params', paginate);

        const requestCon =
          requestConfig?.({ ...(state?.record as any), paginate }) || {};

        // re run when every param change
        const res = await _requestAxios(requestCon?.getConfig?.url, {
          ...(requestCon as any),
          params: requestCon?.getConfig?.params,
        });

        const asyncRes = requestConfig?.((res?.data as any) || {}) || {};

        return {
          data: asyncRes?.getConfig?.requestReturn?.data,
          success: asyncRes?.getConfig?.requestReturn?.success,
          total: asyncRes?.getConfig?.requestReturn?.total,
        };
      }}
      {...{
        // manualRequest: true,
        tableLayout: 'fixed',

        // rest will be apply
        ...(rest as unknown as T),
        options: {
          fullScreen: true,
          ...rest?.options,
        },
        pagination: {
          showQuickJumper: true,
          ...rest?.pagination,
        },
        scroll: {
          x: screen.availHeight - actionWidth,
          scrollToFirstRowOnChange: true,
          y: screen.availHeight - screen.availHeight * 0.33,
          ...rest?.scroll,
        },
        search: !isHasSearch
          ? false
          : {
              labelWidth: 'auto',
              ...rest?.search,
            },
      }}
      columns={newCol as any}
      toolBarRender={() => [
        ...(actions?.isHideAdd
          ? []
          : [
              <Button
                key="add"
                type="primary"
                onClick={() => onClickSetMode('add', {})}
              >
                <PlusOutlined />
                Add
              </Button>,
            ]),
        ...moreToolBarRender?.(state.record as T),
      ]}
    />
  );

  const renderDes = (
    <ProDescriptions
      {...{
        layout: 'vertical',
        columns: newCol as any,
        dataSource: state?.record,
        column: 3,
        ...descriptionsProps,
        contentStyle: {
          maxWidth: '100%',
          ...descriptionsProps?.contentStyle,
        },
        labelStyle: {
          fontWeight: 'bold',
          marginBottom: -13,
          ...descriptionsProps?.labelStyle,
        },
      }}
    />
  );

  return (
    <>
      {isModeForm && (
        <BetaSchemaForm<T>
          form={form}
          width={state.crudMode === 'view' ? 800 : 900}
          grid
          columns={
            state.crudMode === 'view' || state.crudMode === 'delete'
              ? [
                  {
                    title: descriptions,
                    colProps: { span: 24 },
                    renderFormItem: () => {
                      return renderDes;
                    },
                  },
                ]
              : (newCol.map((i) => {
                  return { ...i, width: '100%' };
                }) as any)
          }
          {...{
            colProps: {
              span: state.crudMode === 'view' ? 24 : 12,
            },
            rowProps: {
              gutter: [20, 0],
            },
          }}
          layoutType="ModalForm"
          modalProps={{
            // bug antd not working
            // confirmLoading: true,

            onCancel: () => {
              resetState();
            },
            modalRender(node) {
              return (
                <Spin
                  spinning={
                    state.addLoading ||
                    state.editLoading ||
                    loadingEdit ||
                    loadingAdd
                  }
                  className="!bg-opacity-90 bg-gray-200"
                >
                  {node}
                </Spin>
              );
            },
          }}
          open={state?.openModalForm && isModeForm}
          onFinish={async (values) => {
            // console.log('onFinish', values);
            onClickSetMode?.(
              state.crudMode,
              { ...values, record: state.record },
              true,
            );
          }}
        />
      )}

      <ProCard bodyStyle={{ padding: isModeForm ? 0 : 24 }}>
        {!isModeForm && (
          <Tabs
            activeKey={state.tabMode}
            //@ts-ignore
            onChange={(e: ITabMode) => {
              onClickSetMode(e);
            }}
          >
            <Tabs.TabPane tab={tableTabTitle} key="table" />
            <Tabs.TabPane tab={formTabTitle} key="form" />
            {isDescriptions && (
              <Tabs.TabPane tab={descriptions} key="descriptions" />
            )}
          </Tabs>
        )}
        {['table', 'form'].includes(state.tabMode) && renderTbl}

        {isDescriptions && !isModeForm && renderDes}
      </ProCard>
    </>
  );
}
