import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Col, Divider, Row, Space, Typography } from 'antd';
import {
  _requestAxios,
  _setConfigAxios,
  _initConfigAxios,
  _requestPost,
} from 'next-dev-utils/src';
import { useRequest } from 'ahooks';
import { ReloadOutlined } from '@ant-design/icons';

const UserList = () => {
  _setConfigAxios({
    baseURL: 'https://gorest.co.in/public/v1',
  });

  const { data, loading, refresh } = useRequest(
    async () => (await _requestAxios<IBlog>('/users'))?.data,
  );

  return (
    <ProCard
      size="small"
      bordered
      headerBordered
      title="Demo Request Axios Utils"
      loading={loading}
      extra={
        <Space>
          <Typography.Text>
            Totals Users: {data?.meta?.pagination?.total}
          </Typography.Text>
          <div
            className="px-2 py-1 rounded-lg cursor-pointer bg-gray-50"
            onClick={refresh}
          >
            <ReloadOutlined className="text-lg text-blue-500" />
          </div>
        </Space>
      }
    >
      <Row>
        {data?.data?.map((i, k) => {
          return (
            <Col span={6} key={k}>
              <StatisticCard
                statistic={{
                  title: i?.name,
                  description: i?.email,
                  valueRender: () => <Divider style={{ margin: '10px 0' }} />,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </ProCard>
  );
};

export default UserList;
