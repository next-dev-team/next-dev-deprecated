import {
  Button,
  ConfigProvider,
  Drawer,
  message,
  Radio,
  Space,
  Switch,
  Tabs,
  Typography,
} from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { format } from 'prettier/standalone';

import { IRouteComponentProps, isBrowser } from 'dumi';
import Layout from 'dumi-theme-default/src/layout';
import React, { useEffect, useMemo, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { _store } from '../../stores/store';
import { CodePreview } from '../../helper';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-html';

import './layout.less';

import { useDarkreader } from './useDarkreader';
import { IntlProvider, enUSIntl } from '@ant-design/pro-components';
import { _selAppStoreAppState } from '../../stores/app/selector';
import { Dispatch } from '../../stores/type';
import { AppState } from '../../stores/app/type';
import { CopyOutlined, CopyrightOutlined } from '@ant-design/icons';
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

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggleToolbox, toolboxContent, toolBox } = _selAppStoreAppState();
  const [code, setCode] = useState<'preview' | 'react' | 'html' | 'vue'>(
    'preview',
  );

  const renderContent = (isString = false) => {
    let content: any;
    if (code === 'preview') {
      return toolboxContent?.content;
    }
    if (code === 'html') {
      content = format(renderToStaticMarkup(toolboxContent?.content as any), {
        plugins: [parserBabel, parserHtml],
        parser: 'babel',
        // useTabs: false,
        // tabWidth: 2,
        // endOfLine: 'lf',
        // printWidth: 100,
        // singleQuote: true,
        // trailingComma: 'all',
        // jsxBracketSameLine: false,
      });
    }
    if (code === 'react') {
      content = toolboxContent?.content;
    }

    if (isString) {
      return content;
    }
    return <CodePreview>{content ?? <div>coming soon</div>}</CodePreview>;
  };
  const onCopy = () => {
    /* Get the text field */
    const copyText = document
      .getElementsByClassName('npm__react-simple-code-editor__textarea')
      .item(0)?.textContent as string;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
    message.success({
      content: 'Copied',
      icon: <CopyOutlined style={{ top: -2 }} />,
    });
  };

  return (
    <>
      <Drawer
        visible={toolBox}
        title={
          <Space>
            <Typography.Text strong className="capitalize">
              {toolboxContent?.title}
            </Typography.Text>
          </Space>
        }
        placement="right"
        onClose={toggleToolbox}
        size={'large'}
        width={toolboxContent?.width ?? '65vw'}
        extra={
          <Space>
            <Button
              className="hover:bg-green-600"
              shape="round"
              onClick={onCopy}
              disabled={code === 'preview'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  code !== 'preview'
                    ? 'w-5 h-5 text-green-600 hover:text-gray-50'
                    : '"w-5 h-5'
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
            </Button>
            <Radio.Group
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            >
              <Radio.Button value="preview">Preview</Radio.Button>
              <Radio.Button value="html">Html/Vue</Radio.Button>
              <Radio.Button value="react">React</Radio.Button>
              {/* <Radio.Button value="vue">Vue</Radio.Button> */}
            </Radio.Group>
          </Space>
        }
      >
        {renderContent()}
      </Drawer>
      {children}
    </>
  );
};

const LayoutPage = ({ children, ...props }: IRouteComponentProps) => {
  // useEffect(() => {
  //   if (!isBrowser()) {
  //     return null;
  //   }

  // }, []);

  return (
    <Provider store={_store}>
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
            <InnerLayout>
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
            </InnerLayout>
          </IntlProvider>
        </Layout>
      </ConfigProvider>
    </Provider>
  );
};

export default LayoutPage;
