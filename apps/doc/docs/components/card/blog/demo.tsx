import { Fragment } from 'react';
import { Blog1 } from 'ui/src';
const DemoButton = () => {
  const renderComponent = [
    {
      title: 'Primary',
      render: <Blog1 />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {renderComponent.map((item, key) => (
        <div key={key} className="w-80">
          {item.divider && <hr className="w-full border-b border-gray-200" />}
          {item.render}
        </div>
      ))}
    </div>
  );
};

export default DemoButton;
