# Learning React

you can run a first project using NPX (recommended):

`npx create-react-app your-app`

The `index.js` is responsible to render your `App`, by reading the `root element`in your `index.html` file.


#### So, what happens?
#
the `ReactDOM.render` initialize first, then apply to the DOM , inside the root element your `App.js`.
changing dinamically the DOM for your page.

#### Hello World
#
your-app comes out of the box with a 'hello world'. you can edit the `App.js` and save it to change its contents dinamically.
A hello world example in react:

```
export default function MyHelloWorld(){
  return (
    <div> 
      <h1>Hello, World!!</h1>
    </div>
  );
}
```

the `export default` makes `MyHelloWorld` accessible by any component in your project. You can use it like a `component`, every 'App' in React is called `component`, making your code more reusable, adaptable and simple to read. If your component seens to hard to read, it's time to think on slice it in minor components, separating the rules from it. Think less 'monolithically' and see why React is too powerful and cool to learn.

#### Components
#

You can use multiple ways to create a component in a .js file:
```
export default function MyComponent(){
  //code here
}
```
or in `ES6` class format:

```
classs MyComponent extends React.Component {
  //code here
}
```

same are valid from `React` perspective. but here's a catch:

- classes needs a default constructor, with a default state (when applicable) 
```
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
```

`super(props)` is for inherit `React` props, passing by other components.
- classes should have only `one` constructor
- `this.state` must be set only inside a constructor, you can't do this outside;
- do not set a value directly in a state:
```
this.state.comment = 'Hello';
```

you need to use `this.setState` instead of changing it directly: 
```
this.setState({comment = 'Hello'});
```

#### Lifecycle
#
we can use some approaches:
- when rendering a component or `mounting`;
- when updating a component;
- when a component needs to be destroyed or `unmounted`;

let's see all options in action:

`mounting`
```
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
      );
  }
```
`unmount`
```
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```
`update`
```
  tick() {
    this.setState({
      date: new Date()
    });
  }
```

we already know the `render` method is called first, then he calls `componentDidMount` execute all methods and calls `tick` each second, using it to update the DOM.
`React` have a method named `componentShouldUpdate` too. `componentWillUnmount` should be called when the component is not needed, i.e. the user is changing the page, then `React` calls `componentWillUnmount` clearing the `timerID` used in `setInterval` function.
