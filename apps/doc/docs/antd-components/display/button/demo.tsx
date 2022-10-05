import { Fragment } from 'react';
import { Login1 } from 'next-dev-antd-ui/src';
const DemoButton = () => {
  const renderComponent = [
    {
      title: 'Primary',
      render: (
        <Login1
          onFinish={async (values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          subTitle="World's Largest Gay Dating Site"
        />
      ),
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
