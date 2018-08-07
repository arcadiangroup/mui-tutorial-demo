
import React from 'react';
import { render } from 'react-dom';
import Demo from './DataViewWrapper';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo repo="repo4" view="view3"/>, rootElement);
}
