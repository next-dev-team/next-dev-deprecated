import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import pick from './index';
export default function OmitDemo() {
  const [show, setShow] = useState(false);

  const object = { a: 1, b: '2', c: 3 };

  const output = pick(object, ['a', 'b']);

  const result = !show ? `Output: _ _ _ _` : `Output: { 'a': 1, 'c': 3 }`;

  console.log('output pick', output);

  return (
    <Row gutter={[20, 10]}>
      <Col span={24}>
        <DumiCode lang="tsx">{result}</DumiCode>
      </Col>
      <Col span={24}>
        <Button type="primary" onClick={() => setShow(true)}>
          Pick
        </Button>
      </Col>
    </Row>
  );
}
