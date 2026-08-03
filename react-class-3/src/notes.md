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