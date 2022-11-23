﻿// import { SettingDrawer } from '@ant-design/pro-components';
import React from 'react';
export default ({ children, location, ...rest }) => {
  if (location.pathname.startsWith('/~demos/layout')) {
    return children;
  }

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <div
        style={{
          padding: 24,
          border: '1px solid #f0f0f0',
        }}
      >
        {children}
        {/* <SettingDrawer themeOnly enableDarkTheme /> */}
      </div>
    </div>
  );
};
