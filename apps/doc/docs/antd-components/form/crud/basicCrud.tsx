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
      width: '20%',
      title: 'Name',
      dataIndex: 'name',
      formItemProps: {
        rules: [{ required: true }],
      },
      hideInSearch: false,
    },
    {
      width: '30%',

      title: 'Email',
      dataIndex: 'email',
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      width: '15%',
      title: 'Gender',
      dataIndex: 'gender',
      valueType: 'radioButton',
      customRenderType: 'tag',
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
  interface IPaginate {
    paginate: Paginate;
  }

  interface Paginate {
    params: Params;
    filter: Filter;
    sorter: Filter;
  }

  interface Filter {}

  interface Params {
    current: number;
    pageSize: number;
  }

  return (
    <FormCrud<Datum, Filter>
      // manage form, setFieldsValue, resetFields ....
      form={form}
      // actionRef manage reload or refetch data, filter....
      actionRef={actionRef}
      // manage all column and render form, filter...
      columns={columns}
      // custom config, params, to _axios request
      requestConfig={(value) => {
        const newVal = value as typeof value & ResData & IPaginate;
        console.log('requestConfig', newVal);

        const idField = value?.id || value?.record?.id;

        return {
          //common
          headers: {
            Authorization:
              'Bearer 0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325',
          },
          baseURL: 'https://gorest.co.in/public/v1',

          // getConfig
          getConfig: {
            url: '/users',
            requestReturn: {
              data: newVal?.data,
              success: true,
              total: newVal?.meta?.pagination?.total,
            },
            params: {
              limit: newVal?.paginate?.params?.pageSize,
              page: newVal?.paginate?.params?.current,
            },
          },
          // add or create
          addConfig: {
            url: '/users',
            params: {
              email: value?.email,
              gender: value?.gender,
              name: value?.name,
              status: value?.status,
            },
          },

          // delete
          deleteUrl: `/users/${idField}`,

          //edit
          editUrl: `/users/${idField}`,
          editMethod: 'put',
          editParam: {
            ..._omit(value, 'record'),
          },
        };
      }}
    />
  );
}
