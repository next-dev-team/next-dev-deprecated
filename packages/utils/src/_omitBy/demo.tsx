import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { _isNumber } from '../_isNumber';
import _omitBy from './index';

export default function Demo() {
  const [show, setShow] = useState(false);

  const object = { a: 1, b: '2', c: 3 };

  const output = _omitBy(object, _isNumber);

  // => { 'b': '2' }

  show && console.log('output _omitBy', output);

  const result = show ? `Output: { 'b': '2' }` : `Output: _ _ _ `;

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <DumiCode lang="tsx">{result}</DumiCode>
      </Col>
      <Col span={24}>
        <Button type="primary" onClick={() => setShow(true)}>
          OmitBy
        </Button>
      </Col>
    </Row>
  );
}
