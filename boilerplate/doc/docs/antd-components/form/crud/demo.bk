import { useRef } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
import { _isArray, _requestAxios, _setConfigAxios } from 'next-dev-utils/src';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { useForm } from 'antd/es/form/Form';
import { message, notification, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const ErrMsg = ({ err }: { err: any }) => {
  return (
    <>
      <div className="flex flex-col gap-y-0.5">
        {typeof err === 'string' && err}
        {_isArray(err) &&
          err?.map((i) => {
            return <Typography.Text>{i?.message}</Typography.Text>;
          })}
      </div>
    </>
  );
};

interface ResData {
  meta: Meta;
  data: Datum[];
}

interface Datum {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: Links;
}

interface Links {
  previous?: any;
  current: string;
  next: string;
}

type Filter = Pagination & Datum;

export default function DemoCrud() {
  // set init
  _setConfigAxios({
    baseURL: 'https://gorest.co.in/public/v1',
    headers: {
      Authorization:
        'Bearer 0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325',
    },
    onError: (err) => {
      console.log('er', err?.data?.data?.message);
      message.error({
        content: <ErrMsg err={err?.data?.data?.message || err?.data?.data} />,
      });
    },
    onSuccess: (res) => {
      if (String(res?.config?.method)?.toLowerCase() !== 'get') {
        message.success({
          content: <ErrMsg err="success" />,
        });
      }
    },
  });

  const addNewBlog = (params: Partial<Datum>) =>
    _requestAxios<IBlog>('/users', { params, method: 'post' });
  const editBlog = (id: number, params: Partial<Datum>) =>
    _requestAxios<IBlog>(`/users/${id}`, { params, method: 'put' });

  const deleteBlog = (id: string | number) =>
    _requestAxios<IBlog>(`/users/${id}`, { method: 'delete' });

  const [form] = useForm<Datum>();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      formItemProps: {
        rules: [{ required: true }],
      },
      hideInSearch: false,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      valueType: 'radioButton',
      fieldProps: {
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ],
      },
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: 'Status',
      hideInSearch: false,
      dataIndex: 'status',
      valueType: 'select',
      formItemProps: {
        rules: [{ required: true }],
      },
      fieldProps: {
        options: [
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'active',
            label: 'Active',
          },
        ],
      },
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <FormCrud<Datum, Filter>
        // manage form, setFieldsValue, resetFields ....
        form={form as any}
        // actionRef manage reload or refetch data, filter....
        actionRef={actionRef as any}
        // manage all column and render form, filter...
        columns={columns as any}
        // dataSource={[]}  is manual mode use request instead

        // request is auto mode super fast for CRUD operation
        request={async (params, filter, sorter) => {
          console.log('change params', params, filter, sorter);

          const finalParams = {
            limit: params?.pageSize,
            page: params?.current,
            ...params,
          } as Filter;

          // re run when every param change
          const res = await _requestAxios<ResData>('/users', {
            params: finalParams,
          });
          return {
            // dataSource for table
            data: res?.data?.data,
            success: res?.status === 200,
            // total for pagination
            total: res?.data?.meta?.pagination?.total,
          };
        }}
        // if want to persist columnsState
        columnsState={{
          persistenceKey: 'crud-demo-key',
          persistenceType: 'localStorage',
        }}
        // after confirm delete click
        onDeleteFinished={async (res) => {
          return deleteBlog(res?.id);
        }}
        pagination={{ defaultPageSize: 10, defaultCurrent: 1 }}
        // run after success validate add form
        onFormAddFinished={async (res) => {
          console.log('onFormAddFinished', res);
          return addNewBlog({
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          });
        }}
        // run after success validate edit form
        onFormEditFinished={async (res) => {
          console.log('onFormEditFinished', res);
          return editBlog(res?.record?.id, {
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          });
        }}
        // tracking every event click
        onSetMode={async (res) => {
          console.log('onSetMode', res);
        }}
        // manage actions (fixed at the right)
        actions={{
          // add more action to dropdown 3 dot
          moreOptMenu: (val) => {
            return [
              {
                key: 'check',
                name: 'check',
                icon: <CheckCircleOutlined />,
                onClick: () => {
                  notification.info({
                    message: 'action click',
                    description: (
                      <Typography.Paragraph code>
                        {JSON.stringify(val)}
                      </Typography.Paragraph>
                    ),
                  });

                  console.log('moreOptMenu check', val);
                },
              },
            ];
          },
        }}
      />
    </div>
  );
}
