import LockOutlined from '@ant-design/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import {
  LoginForm,
  LoginFormProps,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import React from 'react';

export type ILogin1<T> = {
  showRemember?: boolean;
  forgotPasswordPath?: string;
  onClickForgotPassword?: () => void;
} & Partial<LoginFormProps<T>>;

export default function Login1<T>(props: ILogin1<T>) {
  const { showRemember, forgotPasswordPath, onClickForgotPassword, ...rest } =
    props;

  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm {...rest}>
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            rules={[
              {
                required: true,
                message: 'Please enter a username!',
              },
              {
                whitespace: true,
                message: 'not allow whitespace',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            rules={[
              {
                required: true,
                message: 'Please enter a password! ',
              },
              {
                whitespace: false,
                message: 'not allow whitespace',
              },
            ]}
          />
        </>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          {/* ---------- showRemember --------- */}
          {showRemember && (
            <ProFormCheckbox noStyle name="autoLogin">
              Remember me
            </ProFormCheckbox>
          )}

          {/* ---------- forgotPasswordPath --------- */}
          {forgotPasswordPath && (
            <a
              onClick={onClickForgotPassword}
              style={{
                float: 'right',
              }}
            >
              Forgot password
            </a>
          )}
        </div>
      </LoginForm>
    </div>
  );
}
