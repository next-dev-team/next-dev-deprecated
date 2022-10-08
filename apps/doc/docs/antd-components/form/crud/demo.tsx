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
  const { runAsync } = useRequest(async (params: any) =>
    _requestAxios<IBlog>('/items/blog', { params }),
  );

  const columns: ProColumns<Datum, 'tag'>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
    },

    {
      title: 'Short Description',
      dataIndex: 'short_description',
      ellipsis: true,
    },

    {
      title: 'Status',
      dataIndex: 'status',
      valueType: 'tag',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <FormCrud<Datum>
        request={async (params = {}) => (await runAsync(params)).data}
        columns={columns as any}
      />
    </div>
  );
};

export default DemoButton;
