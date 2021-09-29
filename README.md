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
