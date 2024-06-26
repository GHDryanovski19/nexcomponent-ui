## Getting Started with @nexcomponent/lib React UI Library

#### &#xA;Welcome to the getting started guide for \`@nexcomponent/lib\`! This guide will walk you through the process of installing the library and using its components in your React application.&#xA;

### Installation

Install `@nexcomponent/lib` via npm or yarn:

```txt
npm install @nexcomponent/lib --save
```

or

```txt
yarn add @nexcomponent/lib
```

## Usage

### Importing Components

Once installed, you can import components from `@nexcomponent/lib` into your React application:

### Example Usage

Here's an example demonstrating the usage of the `NexButton` component:

```tsx
import React from 'react';
import NexButton from '@nexcomponent/lib';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My Component</h1>
      <NexButton onClick={handleClick} type="primary" size="large" text="Click me" />
    </div>
  );
};

export default MyComponent;
```

## Documentation

For detailed documentation on each component and its props, visit the [official documentation](https://main--6672d9cb533920c89e299205.chromatic.com).

## Styling

`@nexcomponent/lib` components come with minimal styling. You can customize the styles by either:

* Passing custom className or styles directly to the components.

## Additional Resources

For additional help or support, you can:

* Visit the [official website](https://nexcomponent.com/).
* Join our community on [Discord]().
* Report bugs or request features on [GitHub](https://github.com/nexcomponent/lib/issues).

That's it! You're now ready to start using `@nexcomponent/lib` in your React application. Happy coding!