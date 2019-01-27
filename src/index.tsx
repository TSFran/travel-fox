import * as React from 'react';
import { render } from 'react-dom';

export const Test = () => {
  return (<div>Test</div>);
};

// function Test1() {
//   return
// }

render(<Test />, document.getElementById('root'));