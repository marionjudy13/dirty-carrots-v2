---
title: 'React Component Notes'
date: '2022-08-08'
id: react-component-notes
---

# React Component Notes
Thank you FreeCodeCamp for Breaking this all down :heart:
[freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/react/pass-props-to-a-stateless-functional-component)

## References For Future Me:

### Stateless Functional Component
#### A Javascript Function

A stateless component is one that can receive data and render it, but does not manage or track changes to that data.

```javascript
const StatelessFunctionalComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

is the same as this:

```javascript
const StatelessFunctionalComponent = () => {
  return (
        <div className='customClass' />
  );
};
```


### ES6 Class Component
#### Creates a class which extends the React.Component class
This allows access to React features such as local state and lifecycle hooks.

```javascript
class ClassExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

### ReactDOM API
None of the React code you write will render to the DOM without making a call to the ReactDOM API.

```javascript
ReactDOM.render(componentToRender, targetNode)
```

### Props
In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome which is a stateless functional component. You can pass Welcome a user property by writing:

```javascript
<App>
  <Welcome user='Mark' />
</App>
```

You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property user is passed to the component Welcome. Since Welcome is a stateless functional component, it has access to this value like so:

```javascript
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```
It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.