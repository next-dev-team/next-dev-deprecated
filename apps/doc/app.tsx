//@ts-ignore
import React from 'react';
const RootApp = (props: any) => {
  const { children, routes } = props;

  // console.log('routes', routes);

  return (
    <>
      {React.cloneElement(children, {
        ...children.props,
      })}
    </>
  );
};
export function rootContainer(container: any) {
  return React.createElement(RootApp, null, container);
}
