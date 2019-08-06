import React from 'react';
import Root from './src/utils/Root';

import 'typeface-roboto';

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};
