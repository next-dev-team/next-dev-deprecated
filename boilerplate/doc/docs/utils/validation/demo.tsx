import { useState } from 'react';
import { _regexEmail, _regexPassword } from 'next-dev-utils/src';
import { Button, Space } from 'antd';
import {
  ProFormText,
  ProForm,
  ProCard,
  ProFormSelect,
} from '@ant-design/pro-components';

export default function Demo() {
  const [form] = ProForm.useForm();

  return (
    <>
      <ProCard bordered headerBordered title="Demo Regex">
        <ProForm form={form}>
          <ProForm.Group>
            <ProFormText
              label="Validate"
              hasFeedback
              placeholder="eg. abc@gmail.com"
              name="email"
              rules={[
                {
                  required: true,
                },
                {
                  pattern: _regexPassword.atLeastTwoNumber,
                  message: 'invalid Email',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm>
      </ProCard>
    </>
  );
}
