import { useState } from 'react';
import { regex } from 'utils';
import { Button, Space } from 'antd';
import {
  ProFormText,
  ProForm,
  ProFormSelect,
} from '@ant-design/pro-components';

/**
 * motions:
 *  - click:[data-action="addon"]
 *  - timeout:1000
 *  - click:[data-action="addon"]
 *  - timeout:1000
 *  - click:[data-action="reset"]
 */
export default function Demo() {
  const [form] = ProForm.useForm();

  return (
    <>
      <ProForm form={form}>
        <ProFormSelect
          name="select"
          label="Select a text"
          fieldProps={{
            onChange: (value) => {
              form.setFieldsValue({ url: value });
              form.validateFields();
            },
          }}
          options={[
            {
              label: 'google.co',
            },
            {
              label: 'www.google.co',
            },
          ]}
          showSearch
        />
        <ProFormText
          hasFeedback
          name="url"
          rules={[
            {
              required: true,
            },
            {
              pattern: regex.urlRegexp,
              message: 'invalid url',
            },
          ]}
        />
      </ProForm>
    </>
  );
}
