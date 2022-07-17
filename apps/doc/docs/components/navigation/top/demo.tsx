import { showCodeMode } from '@/helper';
import { CodeOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { Blog1 } from 'ui/src';
import { hyperNavUi } from './hyperui';
const DemoButton = () => {
  const renderComponent: any[] = [...hyperNavUi];

  return (
    <div className="flex flex-col gap-6">
      {renderComponent.map((item, key) => (
        <Fragment key={key}>
          {item.divider && (
            <>
              <div className="w-full capitalize">{item.title}</div>
              <hr className="w-full border-b border-gray-200" />
            </>
          )}

          {item.render}
          <div
            className="relative flex items-center gap-1 text-gray-500 cursor-pointer right-3 bottom-3 hover:text-pink-500"
            onClick={() => {
              showCodeMode({
                render: item.render,
                title: item.title,
              });
            }}
          >
            <CodeOutlined className="text-pink-600" />
            code
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default DemoButton;
