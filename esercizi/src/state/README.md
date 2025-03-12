Create a Counter function component and create a new state variable called counter initialized to 0.
The counter value should be incremented every time the user clicks on a button. Tip: use the useState hook.
Make it so that the initial value of the counter and the increment amount are passed as props to the component.
Add a decrement button and a reset button to the Counter component. The decrement button should decrement the counter by the amount passed as a prop, and the reset button should reset the counter to the initial value passed as a prop.
Create a new component called CounterDisplay passing it the counter state variable as a count prop, that should be rendered within an h2 tag.
The CounterDisplay component should be rendered within the Counter component. When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why? Write your answers in a comment.
