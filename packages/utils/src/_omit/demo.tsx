import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import _omit from './index';

export default function OmitDemo() {
  const [show, setShow] = useState(false);

  const obj = { a: 1, b: 2, c: 3 };

  // omit a and b
  const output = _omit(obj, 'a', 'b');

  show && console.log('output _omit', output);

  const result = show ? `Output: { "c":3 }` : `Output: _ _ _ `;

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <DumiCode lang="tsx">{result}</DumiCode>
      </Col>
      <Col span={24}>
        <Button type="primary" onClick={() => setShow(true)}>
          Omit
        </Button>
      </Col>
    </Row>
  );
}