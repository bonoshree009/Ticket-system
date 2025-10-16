# What is JSX, and why is it used?

JSX(JavaScript XML) is a syntax extension for JavaScript used in react to
describe what the UI should look like. It Is Used for 1.Easier and More Readalbe 2.Integration with JAvaSript 3.Better Error Detection 3.performence Optimization 5.Component Based Development

# What is the difference between State and Props?

State : Satate represents data that can change over time inside a component.It is mutable.Owned and managed by the component itself.
props:Props are read-only data passed from parent to child component.it is immutable.Owned by the parent componenet and passed down

#  What is the useState hook, and how does it work?
useState allows functional components to have and manage state data that can change over time and cause the component to re-render when it updates.
 ex:

const [progress, setprogress] = useState(0)
<div>
  In-Progress <span>{progress}</span>
</div>
const count = (num) => {
  setProgress(num.length);
};

its work:
1.progress - the state variable
setprogress - the function used to update the state
useState(0) - initializes the state with 0

2.react will diaplay the current value of progress
3.update the progress state and re-renders the component

# How can you share state between components in React?
In react, state is local to a component,but sometimes we nees to share it between multiple components.there are severals ways 
1.Lifting state up
2.Using context API
3.state Management Libraries

# How is event handling done in React?
In React, event handleing is done using camelCase event names like onClick instead of lowercase HTML events.We pass a function to handle the event

