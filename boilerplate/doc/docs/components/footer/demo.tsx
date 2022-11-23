import { CodeOutlined, EyeOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button, Collapse, Space, Typography } from 'antd';
import { Fragment } from 'react';
import { hyperuiFooter } from './hyperui';

const DemoButton = () => {
  const { toggleToolbox, setAppState } = $sel._selAppStoreAppState();

  return hyperuiFooter.map((item, key) => {
    return (
      <Fragment key={key}>
        <ProCard
          headerBordered
          bordered
          bodyStyle={{ padding: 0 }}
          title={<Typography.Text strong>{item.title}</Typography.Text>}
          extra={
            <Space
              onClick={() => {
                // @ts-ignore
                toggleToolbox();
                // @ts-ignore
                setAppState({
                  toolboxContent: {
                    content: item.render,
                    title: item.title,
                  },
                });
              }}
            >
              <EyeOutlined className="text-2xl text-pink-600 cursor-pointer" />
            </Space>
          }
          key={key}
        >
          <iframe
            className="bg-white w-full h-[400px] lg:transition-all lg:h-[600px] "
            loading="lazy"
            srcDoc={$helper.source(item.render)}
          ></iframe>
        </ProCard>
        <div className="h-7" />
      </Fragment>
    );
  });
};

export default DemoButton;
