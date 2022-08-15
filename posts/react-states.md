---
title: 'React States'
date: '2022-08-14'
id: react-states
---

# React State
Excited to finally get into the nuts and bolts of this! Most of these notes so far are from freeCodeAcademy.

---

## About React States:

 According to freecodecamp.org, 'state' consists of any data your application needs to know about, that can change over time.  
 
 You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

 ```javascript
 this.state = {

}
 ```

You have access to the state object throughout the life of your component. You can:
 - update it
 - render it in your UI
 - pass it as props to child components
 
You must create a class component by extending React.Component in order to create state.

Here is an example:

```javascript
class StatefulComponentReturns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Marion',
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

You can render state in the return, and also in the render method BEFORE the return statement (where you can write javascript directly).

```javascript
class RenderMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Marion'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
```

and here is how you a set a new state:

```javascript
class SetNewState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'New State!'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
---