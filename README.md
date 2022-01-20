# React: State and Events


### Review: Components

#### Q: What are components?

Functional or class components. They return React elements (written in JSX).
Need to be exported and imported in order to use in other files.

### Review: Props

#### Q: What are props?

Information sent into a child component from a parent component like an HTML attribute:

```jsx
    // name and age are props
    <MyComponent name={'Laura'} age={25} />

```

**Components should never change their own props.**


### State

#### Q: What is state?

Information managed from within a component.

DO NOT modify state directly.
This will not re-render a component
State should always be immutable.

https://reactjs.org/docs/state-and-lifecycle.html


Class Component

```jsx
import React, { Component } from 'react'

export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        }

    }

    //...

    someMethod(){
        const newItemsArray = ["Learn about State"]
        this.setState({items: newItemsArray})
        //OR
        this.setState(prevState => ({
            items: [...prevState.items, newItemsArray[0]]
        }))
    }

}



```

React Hooks


```jsx
import React, { useState } from "react";

export default function List() {
    const [items, setItems] = useState([]);
    //...
    const someFunction = (item) => setItems(prevItems => [...prevItems, item])
}

```

**NOTE:** class components `setState` accepts a second OPTIONAL argument: a function which is a callback once the state is set (b/c it is set asynchronously). To get a similar effect with react hooks, you use useEffect, which accepts a function as an argument which runs upon initial render and every time state changes:

```jsx

import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);
    //...

    useEffect(() => {
        // this will run upon initial render and after every change to items in dependency array
    }, [items])
}

```

setState does shallow merges so you can set only one key-value pair at once and it won't overwrite the rest of the state.

In hooks, setProperty completely overwrites it instead of merging


### Events

```jsx

export default function MyButton() {
    const [clicked, setClicked] = useState(false);
    //...

    return (
        <button onClick={() => setClicked(pV => !pV)}>{clicked ? "CLICK ME!" : "click me AGAIN!"}</button>
    )
}

```