import React, { useMemo } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { ProTableProps } from '@ant-design/pro-components';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { Button, message, Space, Tabs, Tag } from 'antd';
import { useState } from 'react';
import { _axios } from 'next-dev-utils/dist/_axios';

export type IFormCrud<T, U, ValueType> = ProTableProps<T, U>;
export default function FormCrud<
  T extends Record<string, any>,
  U = any,
  ValueType = any,
>(props: IFormCrud<T, U, any>) {
  const { columns = [], ...rest } = props;
  const [type, setType] = useState('table');

  // const isFormMode = type === 'form';
  const isDescriptions = type === 'descriptions';

  const newCol = useMemo(() => {
    const getCol = columns?.map((i) => {
      return {
        ...i,
        contentStyle: {
          maxWidth: '95%',
        },
      };
    });

    return [
      ...getCol,
      {
        title: 'Actions',
        align: 'center',
        dataIndex: 'actions',
        hideInForm: true,
        width: 300,
        key: 'option',
        valueType: 'option',
        render: () => [
          <a key="link" onClick={() => setType('descriptions')}>
            View
          </a>,
          <a key="link2">Alarm</a>,
          <a key="link3">Monitoring</a>,
          <TableDropdown
            key="actionGroup"
            menus={[
              { key: 'copy', name: 'copy' },
              { key: 'delete', name: 'delete' },
            ]}
          />,
        ],
      },
    ];
  }, [columns]);

  // console.log('columns', columns);

  return (
    <ProCard>
      <Tabs activeKey={type} onChange={(e) => setType(e)}>
        <Tabs.TabPane tab="table" key="table" />
        <Tabs.TabPane tab="form" key="form" />
        {isDescriptions && (
          <Tabs.TabPane tab="descriptions" key="descriptions" />
        )}
      </Tabs>

      {['table', 'form'].includes(type) && (
        <ProTable
          type={type as 'table'}
          rowKey="id"
          dateFormatter="string"
          {...{
            manualRequest: true,
            tableLayout: 'fixed',
            ...(rest as T),

            scroll: {
              // x: screen.availHeight - 80,
              scrollToFirstRowOnChange: true,
              y: screen.availHeight - screen.availHeight * 0.33,
              ...rest?.scroll,
            },
            search: {
              labelWidth: 'auto',
              ...rest?.search,
            },
          }}
          columns={newCol as any}
          toolBarRender={() => [
            <Button key="3" type="primary" onClick={() => setType('form')}>
              <PlusOutlined />
              Add
            </Button>,
          ]}
        />
      )}

      {type === 'descriptions' && (
        <ProDescriptions
          layout="vertical"
          columns={newCol as any}
          dataSource={props?.dataSource?.[0] ?? []}
        />
      )}
    </ProCard>
  );
}
