import { Fragment } from 'react';
import { FormCrud } from 'next-dev-antd-ui/src';
const DemoButton = () => {
  const renderComponent = [
    {
      title: 'Primary',
      render: <FormCrud />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {(renderComponent as any).map((item, key) => (
        <Fragment key={key}>
          {item?.divider && <hr className="w-full border-b border-gray-200" />}
          {item.render}
        </Fragment>
      ))}
    </div>
  );
};

export default DemoButton;
