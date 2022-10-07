import React, { useMemo } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type {
  ProColumns,
  ProDescriptionsItemProps,
  ProTableProps,
} from '@ant-design/pro-components';
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
  // const isDescriptions = type === 'descriptions';

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
      },
    ];
  }, [columns]);

  console.log('columns', columns);

  return (
    <ProCard>
      <Tabs activeKey={type} onChange={(e) => setType(e)}>
        <Tabs.TabPane tab="table" key="table" />
        <Tabs.TabPane tab="form" key="form" />
        <Tabs.TabPane tab="descriptions" key="descriptions" />
      </Tabs>
      {['table', 'form'].includes(type) && (
        <ProTable
          type={type as 'table'}
          pagination={{
            pageSize: 5,
          }}
          rowKey="id"
          dateFormatter="string"
          headerTitle="查询 Table"
          toolBarRender={() => [
            <Button key="3" type="primary" onClick={() => setType('form')}>
              <PlusOutlined />
              新建
            </Button>,
          ]}
          {...(rest as T)}
          columns={newCol}
        />
      )}
      {type === 'descriptions' && (
        <ProDescriptions
          layout="vertical"
          columns={newCol}
          dataSource={props?.dataSource?.[0] ?? []}
        />
      )}
    </ProCard>
  );
}
