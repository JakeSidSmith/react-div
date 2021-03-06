import type * as ReactType from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const React: typeof ReactType = require('react');

const originalCreateElement = React.createElement;

Object.defineProperty(React, 'createElement', {
  value: (...args: Parameters<typeof React.createElement>) => {
    const [type, ...rest] = args;
    const convertedType = typeof type === 'string' ? 'div' : type;

    return originalCreateElement.call(React, convertedType, ...rest);
  },
  configurable: true,
});

export {};
