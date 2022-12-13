import { Card, Segmented } from 'antd';
import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CardBlog1 from '.';

import { mockCardBlog1 } from './mock';

function source(html: any, spacing: string = 'relative') {
  return `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

  <style type="text/tailwindcss">
  @layer utilities {

  }
</style>
<script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            primary: '#007FEC',
            primaryLight: '#00B1FD',
            secondary: '#00D9E9',
            secondaryLight: '#71FACA',
            dark: '#0A101E',
            darker: '#090E1A',
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
          }),
        },
      },

    }
  </script>

</head>

    <body class="${spacing}">
      ${renderToStaticMarkup(html)}
    </body>
  `;
}

export default function Demo() {
  const screenSize = [
    { value: 480, label: 'xs' },
    { value: 640, label: 'sm' },
    { value: 768, label: 'md' },
    { value: 1024, label: 'lg' },
    { value: 1536, label: 'xl' },
  ];
  const [size, setSize] = useState(480);
  return (
    <Card
      size="small"
      title="card"
      bordered={false}
      hoverable={false}
      extra={
        <Segmented
          onChange={(e) => setSize(+e.toString())}
          value={size}
          options={screenSize}
        />
      }
    >
      <iframe
        className="w-full min-h-[600px] mt-2 bg-white  rounded-lg lg:transition-all "
        loading="lazy"
        srcDoc={source(
          <CardBlog1
            {...{
              dataItems: mockCardBlog1(
                {
                  cover:
                    'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                },
                true,
              ),
            }}
          />,
        )}
        style={{ maxWidth: size }}
      ></iframe>
    </Card>
  );
}
