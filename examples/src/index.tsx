import '../../src';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => (
  <main>
    <h1>Wow, look at this</h1>
    <p>
      None of these tags have <strong>any</strong> meaning any more!
    </p>
    <p>Open up the inspector and take a peek.</p>
  </main>
);

ReactDOM.render(<App />, document.getElementById('app'));
