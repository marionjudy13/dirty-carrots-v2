---
title: 'React Lifecycle Methods'
date: '2022-08-16'
id: react-lifecycle-methods
---

# React Lifecycle Methods
Also known as lifecycle hooks, these methods provide opportunities to perform actions at specific points in the lifecycle of a component.

__Main Lifecycle Methods__
- componentWillMount() 
    -  *will be deprecated in a future version of 16.X and removed in version 17*
- componentDidMount() 
- shouldComponentUpdate() 
- componentDidUpdate() 
- componentWillUnmount()

---

### componentDidMount() 

- called after a component is mounted to the DOM
- best practice to place API calls or any calls to your server in componentDidMount()
- best place to attach any event listeners you need to add for specific functionality

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers:54454
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
---

### shouldComponentUpdate(nextProps, nextState)

You can use shouldComponentUpdate() to your component from automatically re-rendering when it receives new props by comparing the props.

- Must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.

```javascript
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if (nextProps.value % 2 === 0) {
    return true;
    }
    return false;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

