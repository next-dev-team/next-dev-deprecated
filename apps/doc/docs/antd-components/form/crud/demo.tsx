import { Fragment, useEffect, useRef } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
import { _isArray, _requestAxios, _setConfigAxios } from 'next-dev-utils/src';
import { useRequest } from 'ahooks';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { useForm } from 'antd/es/form/Form';
import { message, Typography } from 'antd';
import useReactive from 'ahooks/es/useReactive';

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

const DemoButton = () => {
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

  const state = useReactive({
    deleteLoading: false,
  });

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      formItemProps: {
        rules: [{ required: true }],
      },
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
      <FormCrud<Datum>
        deleteLoading={state.deleteLoading}
        form={form as any}
        actionRef={actionRef as any}
        request={async (params = {}) => {
          return (await _requestAxios<ResData>('/users', { params })).data;
        }}
        columns={columns as any}
        onFormAddFinished={(res) => {
          console.log('onFormAddFinished', res);
          addNewBlog({
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          }).then(() => {
            actionRef.current?.reload();
          });
        }}
        onFormEditFinished={(res) => {
          console.log('onFormEditFinished', res);
          editBlog(res?.record?.id, {
            name: res?.name,
            status: res?.status,
            email: res?.email,
            gender: res?.gender,
          }).then(() => {
            actionRef.current?.reload();
          });
        }}
        onSetMode={(res) => {
          if (res?.crudMode === 'delete') {
            state.deleteLoading = true;
            deleteBlog(res?.record?.id).then(() => {
              state.deleteLoading = false;
              actionRef.current?.reload();
            });
          }
        }}
      />
    </div>
  );
};

export default DemoButton;
