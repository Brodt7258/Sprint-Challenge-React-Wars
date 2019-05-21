# Answers

1.  What is React JS and what problems does it try and solve?

- React is a javascript library by facebook that attempts to simplify managing client-side state, and its effect on the view, using and encouraging functional, descriptive, and compositional coding styles/patterns.

2.  What does it mean to _think_ in react?

- "Everything is a component".  Any bit of rendering logic that you may wish to reuse in a different situation can (and usually should) be split into its own component.  Both to avoid repetition, and increase maintainability.  Additionally, the render of a component (if it changes at all) should always be a function of values explicitly contained within its current props and current state.  React does a decent job enforcing that for us though.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- In earlier version of react, a class component had access to the state property, as well as lifecycle methods in which to fetch data or perform side effects at certain times.  Therefore a class component was capable of being "smarter" than a functional component, by handling the application state and the logic needed to update it.  A functional component was simply a product of its props.  This distinction doesn't really apply anymore, at least not to the same degree, since the fairly recent introduction of hooks.

4.  Describe state.

- An object that exists as a property on a class component (or just a value of any kind on a functional component using useState) that triggers a rerender when changed, but should never be mutated directly.  The setState method is used to change its value.  Some (or all) of it may be passed to child components as a prop.

5.  Describe props.

- Values passed into a component from its parent that are (usually) used to derive its current view.  They cannot be altered by the child component.  Instead, callback functions are typically passed as props from the parent as well, and are invoked by the child to signal the parent to perform some change.
