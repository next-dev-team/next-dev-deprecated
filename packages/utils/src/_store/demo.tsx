import { Button, Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import storeWithExp from '.';

export default function Demo() {
  const [lsValue, setLsValue] = useState('default value ls');
  const lsKey = 'lsKey';
  const getKey = storeWithExp.get(lsKey);

  const updateLsValue = (val: string) => {
    setLsValue(val);
    storeWithExp.set(lsKey, val);
    console.log('output storeWithExp', lsValue);
  };

  const clearLsValue = () => {
    setLsValue('');
    storeWithExp.clear();
  };

  // initial
  useEffect(() => {
    updateLsValue(getKey || lsValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getKey]);

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <DumiCode lang="tsx">{lsValue}</DumiCode>
      </Col>
      <Col span={24}>
        <Space>
          <Button danger onClick={() => clearLsValue()}>
            Clear Value
          </Button>

          <Button
            type="primary"
            onClick={() =>
              updateLsValue(new Date().getMilliseconds().toString())
            }
          >
            Change Value
          </Button>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </Space>
      </Col>
    </Row>
  );
}
