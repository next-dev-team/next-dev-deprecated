import { useState } from 'react';
import { _regexEmail, _regexPassword } from 'next-dev-utils/src';
import { Button, Space } from 'antd';
import { ProForm, ProCard } from '@ant-design/pro-components';
import UserList from './user';

export default function Demo() {
  return (
    <>
      <UserList />
    </>
  );
}
