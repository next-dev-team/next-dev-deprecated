import { showCodeMode } from '@/helper';
import { CodeOutlined } from '@ant-design/icons';
import { Button, Collapse, Space, Typography } from 'antd';
import { Fragment } from 'react';
import { hyperNavUi } from './hyperui';

const DemoButton = () => {
  const renderComponent: {
    title: string;
    link: string;
    item: any[];
  }[] = [
    {
      title: 'Hyper Nav UI',
      link: '',
      item: hyperNavUi,
    },
  ];

  return (
    <Collapse accordion defaultActiveKey="1">
      {renderComponent.map((menuItem, key) => {
        return (
          <Collapse.Panel
            header={<Button type="link">{menuItem.title}</Button>}
            key={String(key + 1)}
            extra={
              <Space>
                <Button type="link" target={'_blank'} href={menuItem.link}>
                  Credit: {menuItem.title}
                </Button>
              </Space>
            }
          >
            <div className="space-x-4 space-y-6">
              {menuItem.item.map((item, key) => (
                <Fragment key={String(key)}>
                  {/* {item.divider && (
      <>
        <a
          className="w-full font-bold capitalize"
          href={item?.link ?? '#'}
          target={item?.link ? '_blank' : '_parent'}
          rel="noreferrer"
        >
          {item.sectionTitle}
        </a>
        <hr className="w-full border-b border-gray-200" />
      </>
    )} */}

                  {item.render}
                  <div
                    className="relative flex items-center gap-1 mt-2 text-gray-500 cursor-pointer right-3 bottom-3 hover:text-pink-500"
                    onClick={() => {
                      showCodeMode({
                        render: item.render,
                        title: item.title,
                      });
                    }}
                  >
                    <CodeOutlined className="text-pink-600" />
                    View: <Typography.Text strong>{item.title}</Typography.Text>
                  </div>
                  <hr className="w-full border-b border-gray-200" />
                </Fragment>
              ))}
            </div>
          </Collapse.Panel>
        );
      })}
    </Collapse>
  );
};

export default DemoButton;
