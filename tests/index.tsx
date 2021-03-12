import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe('react-div', () => {
  it("should override React's createElement function, and call the original with string elements swapped for divs", () => {
    const originalCreateElement = React.createElement;

    require('../src');

    expect(React.createElement).not.toBe(originalCreateElement);

    const TestComponent = () => null;

    expect(React.createElement('h1', {}, 'Hello, World!')).toEqual(
      originalCreateElement('div', {}, 'Hello, World!')
    );

    expect(React.createElement(TestComponent, {}, 'Hello, World!')).toEqual(
      originalCreateElement(TestComponent, {}, 'Hello, World!')
    );

    const App = () => (
      <main>
        <h1>Wow, look at this</h1>
        <p>
          None of these tags have <strong>any</strong> meaning any more!
        </p>
        <p>Open up the inspector and take a peek.</p>
      </main>
    );

    expect(renderer.create(<App />)).toMatchSnapshot();
  });
});
