# @jakesidsmith/react-div

**Divs! Divs everywhere!**

## About

Are you sick of all that semantic markup you're generating helping search engines, accessibility tools, and your users from being able to understand and navigate your apps? This might be the solution for you!

Simply import `@jakesidsmith/react-div` in your index file and all of your markup will be converted to divs! Divs everywhere! What more could you want?!

No more need to go to the effort of writing every single element in your app as a `div` (like I know you love to do). Now you can happily write semantic markup with the knowledge that react-div will make sure that it has absolutely no use!

The whole lib is less than 1KB uncompressed! And you know what's even better? It's written in TypeScript, so you know it's type safe. 😎

## Installation

With NPM:

```shell
npm i @jakesidsmith/react-div --save-production
```

With yarn:

```shell
yarn add @jakesidsmith/react-div
```

## Usage

Simply import this library at the top of your index file and you're good to go!

```tsx
import '@jakesidsmith/react-div';
import React from 'react';
import ReactDOM from 'react-dom';

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
```

## Future features

- Parse divs with regexes
- Use divs to send email
- Store divs on the blockchain
