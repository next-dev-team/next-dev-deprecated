import { ConfigProvider, Switch } from 'antd';
import enUS from 'antd/lib/locale/en_US';

import { IRouteComponentProps, isBrowser } from 'dumi';
import Layout from 'dumi-theme-default/src/layout';
import React, { useEffect, useMemo } from 'react';

import './layout.less';
require('./tw.less');

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

function loadJS(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () {
    callback?.();
  };
  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
}

const LayoutPage = ({ children, ...props }: IRouteComponentProps) => {
  useEffect(() => {
    if (!isBrowser()) {
      return null;
    }

    // loadJS(
    //   'https://www.googletagmanager.com/gtag/js?id=G-RMBLDHGL1N',
    //   function () {
    //     // @ts-ignore
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag() {
    //       // @ts-ignore
    //       dataLayer.push(arguments);
    //     }
    //     // @ts-ignore
    //     gtag('js', new Date());
    //     // @ts-ignore
    //     gtag('config', 'G-RMBLDHGL1N');
    //   },
    // );

    // (function (h, o, t, j, a, r) {
    //   // @ts-ignore
    //   h.hj =
    //     // @ts-ignore
    //     h.hj ||
    //     function () {
    //       // @ts-ignore
    //       (h.hj.q = h.hj.q || []).push(arguments);
    //     };
    //   // @ts-ignore
    //   h._hjSettings = { hjid: 2036108, hjsv: 6 };
    //   a = o.getElementsByTagName('head')[0];
    //   r = o.createElement('script');
    //   r.async = 1;
    //   // @ts-ignore
    //   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    //   a.appendChild(r);
    // })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
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
