import React, { Fragment, ReactNode, useCallback, useMemo } from 'react';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import useCreation from 'ahooks/es/useCreation';
import useReactive from 'ahooks/es/useReactive';

import {
  BetaSchemaForm,
  ProColumnType,
  ProTableProps,
} from '@ant-design/pro-components';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import {
  Button,
  FormInstance,
  Popconfirm,
  Spin,
  Tabs,
  Tag,
  Tooltip,
} from 'antd';
import { _axios } from 'next-dev-utils/dist/_axios';
import { _requestAxios } from 'next-dev-utils/dist/_request';
import { _capitalize } from 'next-dev-utils/dist/__capitalize';

type ITabMode = 'form' | 'table' | 'descriptions';
type ICrudMode = 'list' | 'add' | 'edit' | 'view' | 'delete';
type IFormCrudState = {
  tabMode: ITabMode;
  crudMode: ICrudMode;
  record: Record<string, any>;
  openModalForm?: boolean;
};

type Actions = {
  isHideView?: boolean;
  isHideAdd?: boolean;
  isHideDelete?: boolean;
  isShowOptMenu?: boolean;
  moreMenu?: ReactNode[];
  moreOptMenu?: React.ComponentProps<typeof TableDropdown>['menus'];
};

export type IFormCrud<
  T extends Record<string, any>,
  U,
  ValueType,
> = ProTableProps<T, U, ValueType> & {
  onSetMode?: (opt: {
    record: T;
    tabMode: ITabMode;
    crudMode: ICrudMode;
    isFormFinished?: boolean;
  }) => void;
  onFormAddFinished?: (formValue: T) => void;
  onFormEditFinished?: (formValue: T) => void;

  /**
   * custom record id for delete or detail param
   * @default id
   */
  recordId?: string | number;
  /**
   * all related action props
   */
  actions?: Actions;
  formType?: 'tab' | 'modal';
  form: FormInstance<any>;
  deleteLoading?: boolean;
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
    actions = {},
    formType = 'modal',
    form,
    deleteLoading,
    ...rest
  } = props;

  const state = useReactive<IFormCrudState>({
    crudMode: 'list',
    tabMode: 'table',
    record: {},
  });
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
  const onClickSetMode = useCallback(
    (type: ICrudMode | ITabMode, record = {}, isFormFinished?: boolean) => {
      let crudMode: ICrudMode = 'list';
      let tabMode: ITabMode = 'table';

      if (type === 'view') {
        crudMode = 'view';
        tabMode = 'descriptions';
        state.openModalForm = isModeForm;
      }

      if (type === 'edit') {
        crudMode = 'edit';
        tabMode = 'form';
        state.openModalForm = isModeForm;
        if (isFormFinished) {
          onFormEditFinished?.(record);
        }
      }

      if (type === 'delete') {
        crudMode = 'delete';
        tabMode = 'table';
        console.log('onClick deleted');
      }

      state.record = record;
      form?.setFieldsValue?.(record);

      if (type === 'add') {
        crudMode = 'add';
        tabMode = 'form';
        state.openModalForm = isModeForm;
        form?.resetFields();

        if (isFormFinished) {
          onFormAddFinished?.(record);
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
    },
    [form, isModeForm, onFormAddFinished, onFormEditFinished, onSetMode, state],
  );

  const actionOptMenu: typeof actions.moreOptMenu = [
    // { key: 'copy', name: 'copy', icon: <EditOutlined /> },
    // { key: 'delete', name: 'delete' },
    ...(actions?.moreOptMenu || []),
  ];

  const newCol = useCreation(() => {
    const getCol = columns?.map((i) => {
      const isTag = i?.valueType === 'tag';
      // custom render tag
      const renderTag = isTag
        ? {
            render: (_: string, row: any) => {
              const succColor = ['published', 'success'];
              const errColor = ['failed', 'error', 'not found'];
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
        width: '10%',
        valueType: 'option',
        fixed: 'right',
        key: 'actions',
        render: (_: any, record: T) => [
          state.crudMode !== 'view' && (
            <Tooltip title="view" key="view">
              <EyeOutlined
                style={{ color: 'blue', fontSize: 18 }}
                onClick={() => onClickSetMode('view', record)}
              />
            </Tooltip>
          ),

          <Tooltip title="edit" key="edit">
            <EditOutlined
              style={{ color: 'orange', fontSize: 18 }}
              onClick={() => onClickSetMode('edit', record)}
            />
          </Tooltip>,
          <Popconfirm
            title="Are you sure to delete it?"
            onConfirm={() => onClickSetMode('delete', record)}
          >
            <Spin
              size="small"
              spinning={deleteLoading && record?.id === state.record?.id}
            >
              <DeleteOutlined style={{ color: 'red', fontSize: 18 }} />
            </Spin>
          </Popconfirm>,
          actions?.isShowOptMenu && actionOptMenu?.length > 0 && (
            <TableDropdown key="actionGroup" menus={actionOptMenu} />
          ),
        ],
      } as typeof columns[0],
    ];
  }, [columns, onClickSetMode]);

  const isHasSearch = newCol.find((i) => !i?.hideInSearch);

  // console.log('columns');

  const renderTbl = (
    <ProTable<T>
      type={state.tabMode as 'table'}
      rowKey="id"
      dateFormatter="string"
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
      columns={newCol as any}
      toolBarRender={() => [
        <Button
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

  return (
    <>
      {isModeForm && (
        <BetaSchemaForm<T>
          form={form}
          width={state.crudMode === 'view' ? 800 : 900}
          grid
          columns={
            state.crudMode === 'view'
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
          }}
          open={state?.openModalForm && isModeForm}
          onFinish={async (values) => {
            // console.log('onFinish', values);
            onClickSetMode?.(state.crudMode, values, true);
            // close modal
            state.openModalForm = false;
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
