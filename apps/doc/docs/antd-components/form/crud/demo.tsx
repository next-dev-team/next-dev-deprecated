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

interface IBlog {
  data: Datum[];
}

interface Datum {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated?: any;
  date_updated?: any;
  title: string;
  photo: string;
  iframeUr: string;
  short_description: string;
  description?: any;
}
interface CreateBlogParam {
  status: string;
  title: string;
  photo: string;
  short_description: string;
  iframeUr: string;
  description: string;
}

// set init
_setConfigAxios({
  baseURL: 'https://dwmniez7.directus.app',
  onError: (err) => {
    console.log('er', err?.data?.errors);
    message.error({
      content: <ErrMsg err={err?.data?.errors} />,
    });
  },
});

const DemoButton = () => {
  const addNewBlog = (params: CreateBlogParam) =>
    _requestAxios<IBlog>('/items/blog', { params, method: 'post' });

  const deleteBlog = (id: string | number) =>
    _requestAxios<IBlog>(`/items/blog/${id}`, { method: 'delete' });

  const [form] = useForm<Datum>();
  const actionRef = useRef<ActionType>();

  const state = useReactive({
    deleteLoading: false,
  });

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      formItemProps: {
        rules: [{ required: true }],
      },
    },

    {
      title: 'Short Description',
      dataIndex: 'short_description',
      ellipsis: true,
    },

    {
      title: 'Status',
      dataIndex: 'status',
      valueType: 'select',
      fieldProps: {
        options: [
          {
            value: 'published',
            label: 'Published',
          },
          {
            value: 'draft',
            label: 'Draft',
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
          return (await _requestAxios<IBlog>('/items/blog', { params })).data;
        }}
        columns={columns as any}
        onFormAddFinished={(res) => {
          console.log('onFormAddFinished', res);
          addNewBlog({
            title: res?.title,
            short_description: res?.short_description,
            status: res?.status,
          } as any);
          actionRef.current?.reload();
        }}
        onFormEditFinished={(res) => {
          console.log('onFormEditFinished', res);
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
