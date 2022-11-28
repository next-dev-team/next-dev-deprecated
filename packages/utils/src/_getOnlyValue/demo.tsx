import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import _getOnlyValue from '.';

export default function OmitDemo() {
  const [obj, setObj] = useState<any>(false);

  const output = _getOnlyValue({
    a: 1,
    b: undefined,
    c: null,
    d: '',
    e: false,
  });

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>Output: {obj && JSON.stringify(output)}</Col>
      <Col span={24}>
        <Button type="primary" onClick={() => setObj(true)}>
          Get Only Value
        </Button>
      </Col>
    </Row>
  );
}
