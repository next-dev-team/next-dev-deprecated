import { Modal } from 'antd';
import jsxToString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atelierCaveDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light';

export const showCodeMode = ({
  render,
  title,
}: {
  render: any;
  title: any;
}) => {
  Modal.info({
    width: '70%',
    maskClosable: true,
    title: title,
    content: (
      <SyntaxHighlighter language="react" style={atelierCaveDark} wrapLongLines>
        {jsxToString(render)}
      </SyntaxHighlighter>
    ),
  });
};

export const goToTop = () => {
  window.scrollTo(0, 0);
};

export const isProd = process.env.NODE_ENV === 'production';
