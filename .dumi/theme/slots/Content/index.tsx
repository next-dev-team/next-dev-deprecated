import OriContent from 'dumi/theme-default/slots/Content';
import React, { type FC, type ReactNode } from 'react';
import './index.less';

const Content: FC<{ children: ReactNode }> = (props) => {
  return <OriContent>{props?.children}</OriContent>;
};

export default Content;
