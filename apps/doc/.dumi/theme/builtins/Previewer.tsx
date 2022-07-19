import ProSkeleton from '@ant-design/pro-skeleton';
import { Button, Spin } from 'antd';
import { isBrowser } from 'dumi';
import PreView, {
  IPreviewerProps,
} from 'dumi-theme-default/src/builtins/Previewer';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { ToolOutlined } from '@ant-design/icons';
import { _selAppStoreAppState } from '../../../stores/app/selector';

export default ({
  children,
  title,
  btnToolboxTitle,
  extra,
  ...rest
}: IPreviewerProps & {
  height: string;
  title?: string;
  btnToolboxTitle?: string;
  extra?: React.ReactNode;
}) => {
  const { toggleToolbox, toolboxContent } = _selAppStoreAppState();

  if (!isBrowser()) {
    return null;
  }
  return (
    <LazyLoad
      height={`calc(${rest.height} + 128px)` || 500}
      offset={500}
      placeholder={
        parseInt(rest.height) > 300 ? (
          <div
            className="__dumi-default-previewer"
            style={{
              padding: 24,
              background: 'rgb(245, 245, 245)',
            }}
          >
            <ProSkeleton type="descriptions" />
          </div>
        ) : (
          <div style={{ paddingTop: 100, textAlign: 'center' }}>
            <Spin size="large" />
          </div>
        )
      }
      once
    >
      <div className="space-y-3">
        <div className="flex justify-between w-full">
          <div>{title}</div>
          <div>
            {/* {extra}
            {toolboxContent?.content && (
              <Button
                type="primary"
                icon={<ToolOutlined />}
                onClick={toggleToolbox}
              />
            )} */}
          </div>
        </div>
        <PreView {...rest}>
          <div
            style={{
              minHeight: rest.height,
            }}
          >
            {children}
          </div>
        </PreView>
      </div>
    </LazyLoad>
  );
};
