import React, { ReactNode, useMemo } from 'react';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import useCreation from 'ahooks/es/useCreation';
import useReactive from 'ahooks/es/useReactive';
import useMemoizedFn from 'ahooks/es/useMemoizedFn';
import useRequest from 'ahooks/es/useRequest';

import {
  ActionType,
  BetaSchemaForm,
  ProColumnType,
  ProFormInstance,
  ProTableProps,
} from '@ant-design/pro-components/es';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';

import Tag from 'antd/es/tag';
import Tabs from 'antd/es/tabs';
import Spin from 'antd/es/spin';
import Tooltip from 'antd/es/tooltip';
import Popconfirm from 'antd/es/popconfirm';
import Button from 'antd/es/button';

import {
  _setConfigAxios,
  _requestDelete,
  _requestAxios,
  _initConfigAxios,
} from 'next-dev-utils/dist/_request';
import { _capitalize } from 'next-dev-utils/dist/__capitalize';

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
} & Record<string, any>;

type Actions<T> = {
  isHideView?: boolean;
  isHideAdd?: boolean;
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
    };
  };
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
    requestConfig,
    ...rest
  } = props;
  const state = useReactive<IFormCrudState<IFilter>>({ ...dfState });

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
    onSuccess: () => {
      state.openModalForm = false;
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
                state.openModalForm = false;
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
          state.addLoading = true;
          onFormAddFinished?.(record)
            .then(() => {
              // close modal
              state.openModalForm = false;
              state.addLoading = false;
              _actionRef.current?.reload(true);
            })
            .finally(() => {
              // close modal
              state.addLoading = false;
            });
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

  const newCol = useMemo(() => {
    const getCol = columns?.map((i) => {
      const newItem = i as typeof i & { customRenderType?: 'tag' };
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

              return (
                <Tag
                  style={{ minWidth: 68, textAlign: 'center' }}
                  color={
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

      const renFixed =
        isTag && i?.dataIndex === 'status'
          ? ({ fixed: 'right', width: 80, align: 'center' } as typeof i)
          : {};

      const renWidth = !i?.ellipsis
        ? {
            width: '20%', // not yet finalize
          }
        : {
            width: i?.width ?? 300,
          };

      return {
        hideInSearch: true,
        ...renWidth,
        ...renderTag,
        ...i,
        ...renFixed,
      };
    });

    return [
      ...getCol,
      {
        title: 'Actions',
        align: 'center',
        dataIndex: 'actions',
        hideInForm: true,
        hideInSearch: true, // change df to true
        width: '15%',
        valueType: 'option',
        fixed: 'right',
        key: 'actions',
        render: (_: any, record: T) => [
          <Tooltip title="view" key="view">
            <EyeOutlined
              disabled={state.openModalForm}
              style={{
                color: state.openModalForm ? 'gray' : 'blue',
                fontSize: 18,
                cursor: state.openModalForm ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                !state.openModalForm && onClickSetMode('view', record);
              }}
            />
          </Tooltip>,
          <Tooltip title="edit" key="edit">
            <EditOutlined
              style={{
                color: 'orange',
                fontSize: 18,
              }}
              onClick={() => onClickSetMode('edit', record)}
            />
          </Tooltip>,
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
            <TableDropdown key="actionGroup" menus={actionOptMenu(record)} />
          ),
        ],
      } as typeof columns[0],
    ];
  }, [
    actionOptMenu,
    actions,
    columns,
    loadingDelete,
    onClickSetMode,
    state.deleteLoading,
    state.openModalForm,
    state.record?.id,
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
        console.log('change params', params, filter, sorter);

        const finalParams = {
          limit: params?.pageSize,
          page: params?.current,
          ...params,
        };

        const requestCon = requestConfig?.(state?.record as any) || {};

        // re run when every param change
        const res = await _requestAxios(requestCon?.getConfig?.url, {
          params: finalParams,
          ...(requestCon as any),
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

        scroll: {
          // x: screen.availHeight - 80,
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
      columns={newCol}
      toolBarRender={() => [
        <Button
          data-action="on_click_add"
          key="3"
          type="primary"
          onClick={() => onClickSetMode('add', {})}
        >
          <PlusOutlined />
          Add
        </Button>,
      ]}
    />
  );

  const renderDes = (
    <ProDescriptions
      layout="vertical"
      columns={newCol as any}
      dataSource={state?.record}
      {...{
        column: 2,
        contentStyle: {
          maxWidth: '100%',
        },
        labelStyle: {
          fontWeight: 'bold',
          marginBottom: -13,
        },
      }}
    />
  );

  // useEffect(() => {
  //   if (
  //     state.crudMode === 'delete' &&
  //     state.tabMode === 'table' &&
  //     !deleteLoading
  //   ) {
  //     state.openModalForm = false;
  //   }
  // }, [deleteLoading, state]);

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
            onCancel: () => {
              state.openModalForm = false;
            },
            // onOk: () => {
            //   if (state.crudMode === 'view') {
            //     state.openModalForm = false;
            //   }
            // },
            modalRender(node) {
              return (
                <Spin
                  spinning={
                    state.addLoading || state.editLoading || loadingEdit
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
