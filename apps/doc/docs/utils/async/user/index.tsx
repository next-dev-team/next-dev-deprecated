import { ProCard, ProList, StatisticCard } from '@ant-design/pro-components';
import { Button, Col, Divider, Image, Row, Skeleton, Space, Tag } from 'antd';
import {
  _requestAxios,
  _setConfigAxios,
  _initConfigAxios,
  _requestPost,
} from 'next-dev-utils/src';
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { IBlog } from './type';
import { ReloadOutlined } from '@ant-design/icons';

_setConfigAxios({
  baseURL: 'https://dwmniez7.directus.app',
});

const UserList = () => {
  const { data, loading, refresh } = useRequest(
    async () => (await _requestAxios<{ data: IBlog[] }>('/items/blog'))?.data,
  );

  return (
    <ProCard
      size="small"
      bordered
      headerBordered
      title="Demo Request Axios Utils"
      loading={loading}
      extra={
        <div
          className="px-2 py-1 rounded-lg cursor-pointer bg-gray-50"
          onClick={refresh}
        >
          <ReloadOutlined className="text-lg text-blue-500" />
        </div>
      }
    >
      <Row>
        {data?.data?.map((i, k) => {
          return (
            <Col span={6} key={k}>
              <StatisticCard
                statistic={{
                  title: i?.title,
                  description: i?.short_description,
                  valueRender: () => <Divider style={{ margin: '10px 0' }} />,
                }}
                chart={
                  <img
                    src={
                      _initConfigAxios?.baseURL +
                      '/assets/' +
                      i?.photo +
                      '?format=webp'
                    }
                    alt="柱状图"
                  />
                }
              />
            </Col>
          );
        })}
      </Row>
    </ProCard>
  );
};

export default UserList;
