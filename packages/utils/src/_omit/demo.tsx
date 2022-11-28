import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import _omit from '.';

export default function OmitDemo() {
  const [obj, setObj] = useState<any>({ a: 1, b: 2, c: 3 });

  // omit a and b
  const output = _omit(obj, 'a', 'b');

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>Output: {JSON.stringify(obj)}</Col>
      <Col span={24}>
        <Button type="primary" onClick={() => setObj(output)}>
          Remove Obj a
        </Button>
      </Col>
    </Row>
  );
}
