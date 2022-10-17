import { useRef } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
import {
  _isArray,
  _omit,
  _requestAxios,
  _setConfigAxios,
} from 'next-dev-utils/src';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { useForm } from 'antd/es/form/Form';

interface ResData {
  data: Datum[];
}

interface Datum {
  id: number;
  status: string;
  user_created?: any;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  photo: string;
  iframeUr?: any;
  short_description: string;
  description: string;
}

type Filter = Pagination & Datum;
const ASSETS = 'https://dwmniez7.directus.app/assets/';

export default function DemoCrud() {
  const [form] = useForm<Datum>();
  const actionRef = useRef<ActionType>();

  const columns: Array<
    ProColumns<Datum> & { dataIndex?: keyof Datum; customRenderType?: 'tag' }
  > = [
    {
      title: 'No',
      valueType: 'index',
      width: '10%',
    },
    {
      width: '10%',
      title: 'Name',
      dataIndex: 'title',
      formItemProps: {
        rules: [{ required: true }],
      },
      hideInSearch: false,
    },
    {
      width: '10%',
      title: 'Photo',
      dataIndex: 'photo',
      valueType: { type: 'image', width: 70 },
    },
    {
      width: '30%',
      title: 'Short Description',
      dataIndex: 'short_description',
      valueType: 'textarea',
      ellipsis: true,
    },
    {
      width: '20%',
      title: 'Modified date',
      dataIndex: 'date_updated',
      valueType: 'date',
    },

    {
      width: '10%',
      title: 'Status',
      hideInSearch: false,
      dataIndex: 'status',
      valueType: 'select',
      customRenderType: 'tag',
      formItemProps: {
        rules: [{ required: true }],
      },
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
    <FormCrud<Datum, Filter>
      // manage form, setFieldsValue, resetFields ....
      form={form}
      // actionRef manage reload or refetch data, filter....
      actionRef={actionRef}
      // manage all column and render form, filter...
      columns={columns}
      // custom config, params, to _axios request
      requestConfig={(returnVal) => {
        const value = returnVal as unknown as ResData & typeof returnVal;
        console.log('requestConfig', value);

        const idField = value?.id || value?.record?.id;

        return {
          // common
          headers: {
            Authorization: 'Bearer D5UspbnsDoF-PMLpPSESE072T6vky2DJ',
          },
          baseURL: 'https://dwmniez7.directus.app/items',

          // getConfig
          getConfig: {
            url: '/blog',
            requestReturn: {
              data: value?.data?.map?.((i) => {
                return { ...i, photo: ASSETS + i?.photo };
              }),
              total: 10,
            },
          },
          addConfig: {
            params: {
              status: 'published',
              title: 'hello',
              short_description: 'bg',
              description: '<p>j</p>',
              photo: '5c2a896e-b3f4-4098-9ddf-7cefda50905c',
            },
          },

          // delete
          deleteUrl: `/blog/${idField}`,

          //edit
          editUrl: `/blog/${idField}`,
          editMethod: 'put',
          editParam: {
            ..._omit(value, 'record'),
          },
        };
      }}
    />
  );
}
