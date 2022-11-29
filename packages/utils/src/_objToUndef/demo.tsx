import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import _objToUndef from '.';
import { _isEmpty } from '../_isEmpty';

export default function OmitDemo() {
  const [obj, setObj] = useState<any>({});

  const output = _objToUndef({ a: 1, b: 'hello', c: false }, 'a');
  console.log('output', output);

  const renderOp = _isEmpty(obj) ? '' : `{ a: 1, b: undefined, c: undefined }`;

  return (
    <Row gutter={[20, 20]}>
      <DumiCode lang="tsx">{`Output: ${renderOp}`}</DumiCode>
      <Col span={24}>
        <Button type="primary" onClick={() => setObj(output)}>
          objToUndef
        </Button>
      </Col>
    </Row>
  );
}
