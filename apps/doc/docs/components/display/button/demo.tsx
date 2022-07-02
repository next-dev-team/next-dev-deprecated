import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { Button } from 'ui/src';
const DemoButton = () => {
  const renderComponent = [
    {
      title: 'Primary',
      render: <Button title="Primary" />,
    },
    {
      title: 'Primary Rounded',
      render: <Button title="rounded" shape="rounded" />,
    },
    {
      title: 'Primary Disabled',
      render: <Button title="disabled" isDisabled />,
    },
    {
      title: 'left Icon',
      render: <Button title="left Icon" leftIcon={<LeftOutlined />} />,
    },
    {
      title: 'right Icon',
      render: <Button title="right Icon" rightIcon={<RightOutlined />} />,
    },
    {
      title: 'Icon End',
      render: (
        <Button
          title="Icon End"
          rightIcon={<RightOutlined className="absolute right-1.5" />}
        />
      ),
    },
    {
      title: 'Outline Rounded',
      render: (
        <Button variant="outline" title="Outline Rounded" shape="rounded" />
      ),
    },

    {
      title: 'Primary outline',
      render: <Button variant="outline" title="Outline" />,
    },

    {
      title: 'link',
      render: <Button variant="link" title="link" />,
    },
    {
      title: 'link',
      render: (
        <Button
          variant="link"
          textTransform="uppercase"
          title="link with icon"
          rightIcon={<RightOutlined className="absolute right-1.5" />}
        />
      ),
    },
    {
      title: 'outline Block',
      render: <Button variant="outline" title="Outline Block " isFull />,
    },
    {
      title: 'success',
      divider: true,
      render: <Button title="success" color="success" />,
    },
    {
      title: 'dark',
      render: <Button title="dark" color="dark" />,
    },
    {
      title: 'light',
      render: <Button title="light" color="light" />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {renderComponent.map((item, key) => (
        <Fragment key={key}>
          {item.divider && <hr className="w-full border-b border-gray-200" />}
          {item.render}
        </Fragment>
      ))}
    </div>
  );
};

export default DemoButton;
