import { useRef, useState } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
import {
  _isArray,
  _omit,
  _requestAxios,
  _setConfigAxios,
} from 'next-dev-utils/src';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { useForm } from 'antd/es/form/Form';
import { Card, ConfigProvider, Descriptions, Select, Space } from 'antd';

import enUSIntl from 'antd/es/locale/en_US';
import kmKHIntl from 'antd/es/locale/km_KH';
import dayjs from 'dayjs';

interface ResData {
  data: Datum[];
}

interface Datum {
  state: string;
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

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const intlMap = {
  kmKHIntl,
  enUSIntl,
};

export default function DemoCrud() {
  const [form] = useForm<Datum>();
  const actionRef = useRef<ActionType>();
  const [intl, setIntl] = useState<keyof typeof intlMap>('kmKHIntl');

  const columns: Array<
    ProColumns<Datum> & { dataIndex?: keyof Datum; customRenderType?: 'tag' }
  > = [
    {
      title: 'No',
      valueType: 'indexBorder',
      width: '10%',
    },
    {
      width: '10%',
      title: 'Name',
      dataIndex: 'title',
      tip: 'The title will automatically shrink if it is too long',
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
      title: 'state',
      dataIndex: 'state',
      initialValue: 'all',
      filters: true,
      onFilter: true,
      valueEnum: {
        all: { text: 'All', status: 'Default' },
        close: { text: 'close', status: 'Default' },
        running: { text: 'running', status: 'Processing' },
        online: { text: 'Online', status: 'Success' },
        error: { text: 'Exception', status: 'Error' },
      },
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
      sorter: true,
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
    <ConfigProvider locale={intlMap[intl]}>
      <FormCrud<Datum, Filter>
        // manage form, setFieldsValue, resetFields ....
        form={form}
        // actionRef manage reload or refetch data, filter....
        actionRef={actionRef}
        // manage all column and render form, filter...
        columns={columns}
        options={{
          search: true,
        }}
        headerTitle={
          <Space>
            <span>Advance Table</span>
            <Select<keyof typeof intlMap>
              defaultActiveFirstOption
              bordered={false}
              value={intl}
              onChange={(value) => {
                dayjs.locale(intlMap[value].locale);
                setIntl(value);
              }}
              options={Object.keys(intlMap).map((value) => ({
                value,
                label: value,
              }))}
            />
          </Space>
        }
        tableExtraRender={(_, data) => (
          <Card>
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association">
                <a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">
                2017-01-10
              </Descriptions.Item>
              <Descriptions.Item label="Effective Time">
                2017-10-10
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}
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
                  return {
                    ...i,
                    photo: ASSETS + i?.photo,
                    state: valueEnum[Math.floor(Math.random() * 10) % 4],
                  };
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
    </ConfigProvider>
  );
}
