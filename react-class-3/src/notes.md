<!-- import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
   
  function increaseCount(){
    setCount(count => count + 1)
  }
//  useEffect(()=>{
//   setInterval(increaseCount , 1000)},
//  [])

 useEffect(()=>{
  console.log("from the dependency end");
  
 },[count])
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {count}
        </div>

        <img
          style={{ cursor: "pointer" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrm8iP-NuwIKDOCOGCCa68Rsa8DKs2-9O-ZurE8cBug&s=10"
          width={40}
          alt="Notification Bell"
        />
      </div>
      {/* <button onClick={increaseCount}>Increase The count</button> */}
    </div>
  );
}

export default App; -->



# React Props & `children` Summary

## 1. What are `props`?

- `props` (properties) are the **arguments** passed to a React component.
- React automatically creates the `props` object.

Example:

```jsx
function Card(props) {
  console.log(props);
}
```

Usage:

```jsx
<Card title="Profile">
  <h1>Hello</h1>
</Card>
```

React internally does something similar to:

```jsx
Card({
  title: "Profile",
  children: <h1>Hello</h1>
});
```

So inside the component:

```jsx
props = {
  title: "Profile",
  children: <h1>Hello</h1>
}
```

---

## 2. What is `children`?

`children` is a **special prop** that contains everything placed between a component's opening and closing tags.

Example:

```jsx
<Card>
  <h1>Hello</h1>
  <p>Welcome!</p>
</Card>
```

React creates:

```jsx
props = {
  children: (
    <>
      <h1>Hello</h1>
      <p>Welcome!</p>
    </>
  )
}
```

---

## 3. Accessing `children`

### Using `props`

```jsx
function Card(props) {
  return <div>{props.children}</div>;
}
```

### Using Destructuring

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Both are exactly the same.

---

## 4. Why `{ children }`?

The braces (`{}`) in the function parameter are **JavaScript object destructuring**, not React syntax.

This:

```jsx
function Card({ children }) {}
```

is shorthand for:

```jsx
function Card(props) {
  const { children } = props;
}
```

or equivalently:

```jsx
function Card(props) {
  const children = props.children;
}
```

---

## 5. Why not write `{ children } from props`?

Because JavaScript doesn't support that syntax.

You can either:

```jsx
function Card(props) {
  const { children } = props;
}
```

or destructure directly in the parameter:

```jsx
function Card({ children }) {}
```

---

## 6. Is `children` just another key in `props`?

Yes.

Example:

```jsx
props = {
  title: "Profile",
  color: "blue",
  children: <h1>Hello</h1>
}
```

Here:

- `title` → key
- `color` → key
- `children` → key

`children` is just another property of the `props` object, although React automatically provides it.

---

## 7. Destructuring Multiple Props

Instead of:

```jsx
function Card(props) {
  const title = props.title;
  const color = props.color;
  const children = props.children;
}
```

You can write:

```jsx
function Card({ title, color, children }) {
  // use title, color, children directly
}
```

---

# Key Takeaways

- `props` is the object React passes as the first argument to a component.
- `children` is a special property inside the `props` object.
- `{ children }` is JavaScript object destructuring.
- These are equivalent:

```jsx
function Card(props) {
  return <div>{props.children}</div>;
}
```

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Remember:

```
props
 ├── title
 ├── color
 └── children
```

Destructuring:

```jsx
const { children } = props;
```

or directly:

```jsx
function Card({ children }) {}
```

# React Error Boundary - Summary

## What is an Error Boundary?

An **Error Boundary** is a special **React class component** that catches JavaScript errors in its child components and displays a **fallback UI** instead of crashing the entire application.

---

# Why use an Error Boundary?

Without an Error Boundary:

```
Child Component Crashes
        │
        ▼
Entire React App Crashes ❌
```

With an Error Boundary:

```
Child Component Crashes
        │
        ▼
Error Boundary Catches Error
        │
        ▼
Shows Fallback UI ✅
```

---

# Basic Structure

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

---

# Understanding Every Part

## 1. Extending React.Component

```jsx
class ErrorBoundary extends React.Component
```

Creates a **class component**.

> Error Boundaries only work with **class components**.

---

## 2. Constructor

```jsx
constructor(props){
    super(props);
}
```

Runs when the component is created.

Receives props from the parent.

---

## 3. super(props)

```jsx
super(props);
```

Calls the constructor of `React.Component`.

Required before using:

- `this`
- `this.state`
- `this.props`

---

## 4. State

```jsx
this.state = {
    hasError: false
}
```

Initial state.

```
false
```

means:

> No child component has crashed.

---

## 5. getDerivedStateFromError()

```jsx
static getDerivedStateFromError(error)
```

Special lifecycle method.

Runs automatically when a child throws an error.

Returns new state.

```jsx
return {
    hasError: true
}
```

React then re-renders the component.

---

## 6. componentDidCatch()

```jsx
componentDidCatch(error, info)
```

Runs after the error is caught.

Useful for:

- Logging errors
- Sending errors to monitoring services
- Debugging

Example:

```jsx
componentDidCatch(error, info){
    console.log(error);
    console.log(info);
}
```

---

## 7. render()

```jsx
render(){
```

Determines what should appear on the screen.

---

## 8. Checking for Errors

```jsx
if(this.state.hasError){
    return <h1>Something went wrong.</h1>;
}
```

If an error occurred:

Show the fallback UI.

Otherwise:

```jsx
return this.props.children;
```

Render the wrapped child components.

---

# What is `this.props.children`?

Example:

```jsx
<ErrorBoundary>
    <Counter />
</ErrorBoundary>
```

Inside `ErrorBoundary`:

```jsx
this.props.children
```

equals

```jsx
<Counter />
```

So the render method returns the wrapped component.

---

# What is Fallback UI?

Fallback UI is the **backup screen** shown when a child component crashes.

Example:

```jsx
return <h1>Something went wrong.</h1>;
```

Instead of crashing the whole app, React displays this backup UI.

Examples:

- "Something went wrong."
- "Please refresh the page."
- Retry button
- Error illustration

---

# Error Boundary Flow

```
<App>

      │
      ▼

<ErrorBoundary>

      │
      ▼

<Counter />

      │
      │ throws error
      ▼

getDerivedStateFromError()

      │
      ▼

hasError = true

      │
      ▼

componentDidCatch()

      │
      ▼

render()

      │
      ▼

Fallback UI
```

---

# Common Mistakes

### ❌ Wrong

```jsx
getDerivedStateFromErro
```

### ✅ Correct

```jsx
getDerivedStateFromError
```

---

### ❌ Wrong

```jsx
this.props.childern
```

### ✅ Correct

```jsx
this.props.children
```

---

### ❌ Wrong

```jsx
}
return this.props.children;
```

Outside `render()`.

### ✅ Correct

```jsx
render(){
    if(this.state.hasError){
        return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
}
```

---

# Limitations of Error Boundaries

Error Boundaries **DO NOT** catch errors in:

- Event handlers (`onClick`)
- `setTimeout()`
- `setInterval()`
- Asynchronous code (`async/await`, Promises)
- Server-side rendering (SSR)
- Errors inside the Error Boundary itself

---

# Interview Questions

### What is an Error Boundary?

A React class component that catches JavaScript errors in its child components and displays a fallback UI instead of crashing the entire application.

---

### Why must it be a class component?

Because Error Boundaries rely on special lifecycle methods (`getDerivedStateFromError` and `componentDidCatch`), which are only available in class components.

---

### What is a fallback UI?

A backup UI displayed when a child component throws an error.

Example:

```jsx
<h1>Something went wrong.</h1>
```

---

### Difference between `getDerivedStateFromError` and `componentDidCatch`

| getDerivedStateFromError | componentDidCatch |
|--------------------------|-------------------|
| Updates state | Logs errors |
| Static method | Instance method |
| Triggers fallback UI | Used for debugging/reporting |
| Runs before rendering fallback UI | Runs after the error is caught |

---

# Quick Revision

- Error Boundary catches rendering errors in child components.
- Prevents the entire React app from crashing.
- Must be a **class component**.
- Uses `getDerivedStateFromError()` to update state.
- Uses `componentDidCatch()` for logging.
- Displays a **fallback UI** when an error occurs.
- Renders children normally when there is no error.