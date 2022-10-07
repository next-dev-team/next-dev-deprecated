import { Fragment } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
import { _requestAxios, _setConfigAxios } from 'next-dev-utils/src';
import { useRequest } from 'ahooks';
import { ProColumns } from '@ant-design/pro-components';

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

// set init
_setConfigAxios({
  baseURL: 'https://dwmniez7.directus.app',
});
const DemoButton = () => {
  const getBloc = async () => _requestAxios<{ data: IBlog[] }>('/items/blog');

  // using with hook provide loading, error cache etc
  const { data, loading, refresh } = useRequest(getBloc);

  const columns: ProColumns<Datum>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
    },

    {
      title: 'Short Description',
      dataIndex: 'short_description',
      width: 400,
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <FormCrud<IBlog>
        options={{
          reload: refresh,
        }}
        columns={columns}
        loading={loading}
        dataSource={data?.data?.data}
      />
    </div>
  );
};

export default DemoButton;
