import { Button, Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import secureLocalStorage from '.';

export default function Demo() {
  const [lsValue, setLsValue] = useState<number | undefined>();
  const lsKey = 'password';

  useEffect(() => {
    secureLocalStorage.setItem(lsKey, 'abc@password');
  }, []);

  useEffect(() => {
    const value = secureLocalStorage.getItem(lsKey) as number;
    if (value) {
      setLsValue(value);
    }
  }, []);

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <DumiCode lang="tsx">{lsValue ? String(lsValue) : ''}</DumiCode>
      </Col>
      <Col span={24}>
        <Space>
          <Button onClick={() => window.location.reload()}>Set Value</Button>

          <Button
            type="primary"
            danger
            onClick={() => {
              secureLocalStorage.removeItem(lsKey);
              setLsValue(undefined);
            }}
          >
            Remove
          </Button>
        </Space>
      </Col>
    </Row>
  );
}
