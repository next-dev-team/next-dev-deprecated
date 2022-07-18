import { Fragment } from 'react';
const DemoButton = () => {
  const renderComponent = [
    {
      title: 'Primary',
      render: <h1>coming soon</h1>,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {renderComponent.map((item, key) => (
        <Fragment key={key}>
          {item?.divider && <hr className="w-full border-b border-gray-200" />}
          {item.render}
        </Fragment>
      ))}
    </div>
  );
};

export default DemoButton;
