import { Button, ConfigProvider, Drawer, Space, Switch } from 'antd';
import enUS from 'antd/lib/locale/en_US';

import { IRouteComponentProps, isBrowser } from 'dumi';
import Layout from 'dumi-theme-default/src/layout';
import React, { useEffect, useMemo } from 'react';

import './layout.less';

import { useDarkreader } from './useDarkreader';
import { IntlProvider, enUSIntl } from '@ant-design/pro-components';
// import '@ant-design/pro-components/dist/components.css';

const DarkButton = () => {
  const colorScheme = useMemo(() => {
    if (!isBrowser()) {
      return 'light';
    }

    return matchMedia?.('(prefers-color-scheme: dark)').matches && 'dark';
  }, []);

  const defaultDarken = useMemo(() => {
    if (!isBrowser()) {
      return 'light';
    }
    return localStorage.getItem('procomponents_dark_theme') || colorScheme;
  }, []);

  const setColor = (isDarken: boolean) => {
    try {
      const theme = document.getElementsByTagName('meta')['theme-color'];
      theme.setAttribute('content', isDarken ? '#242525' : '#1890ff');
    } catch (error) {}
  };

  const [isDark, { toggle }] = useDarkreader(defaultDarken === 'dark');

  useEffect(() => {
    setColor(isDark);
  }, [isDark]);

  if (!isBrowser()) {
    return null;
  }
  return (
    <Switch
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      defaultChecked={defaultDarken === 'dark'}
      checked={isDark}
      onChange={(check) => {
        toggle();
        if (!check) {
          localStorage.setItem('procomponents_dark_theme', 'light');
        } else {
          localStorage.setItem('procomponents_dark_theme', 'dark');
        }
      }}
    />
  );
};

// function loadJS(url, callback) {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.onload = function () {
//     callback?.();
//   };
//   script.src = url;

//   document.getElementsByTagName('head')[0].appendChild(script);
// }

const LayoutPage = ({ children, ...props }: IRouteComponentProps) => {
  useEffect(() => {
    if (!isBrowser()) {
      return null;
    }
    return;
  }, []);

  return (
    <ConfigProvider
      {...{
        // form: { validateMessages },

        locale: enUS,
      }}
    >
      <Layout {...props}>
        <IntlProvider
          value={{
            intl: enUSIntl,
            valueTypeMap: {},
          }}
        >
          <Drawer
            // visible
            title={` Drawer`}
            placement="right"
            size={'large'}
            extra={
              <Space>
                <Button type="primary">OK</Button>
              </Space>
            }
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          <div>
            <div key="children">{children}</div>
            <div
              style={{
                position: 'fixed',
                right: 8,
                top: 0,
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
              }}
              key="procomponents_dark_theme_view"
              className="procomponents_dark_theme_view"
            >
              {isBrowser() ? <DarkButton /> : null}
            </div>
          </div>
        </IntlProvider>
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutPage;
