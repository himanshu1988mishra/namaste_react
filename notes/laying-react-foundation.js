/*
    
    1. JSX is javascript syntax extension. Its easier to create react elements using JSX. 
       Its not HTML its just looks like HTML. JSX is compiled to React.createElement() calls which returns react elements.
    
    2. JSX is not valid javascript. Browsers cannot read JSX directly. 
       JSX is transpiled (converted) before it reaches JS engine. It is done by Transpiler like Babel.

    3. JSX => React.createElement() i.e. React Element (JS Object) => HTML Element

    4. Babel is a Transpiler that converts JSX into valid javascript. There are other Transpilers like TypeScript, CoffeeScript, etc. Babel is used to convert JSX into valid javascript.

    5. In React there are two types of components - Functional Component and Class Component. 
       Functional Component is a function that returns some piece of JSX. 
       Class Component is a class that extends React.Component and has a render method that returns JSX.

    6. Component Composition is the process of combining multiple components to create a new component.

    7. We can execute a functional component like <Title /> or <Title></Title> or {Title()} or {Title(props)}. 
       All of them are valid ways to execute a functional component.

    8. Advantages of using JSX:
       a. Sanitizes the data - If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is 
          called cross-site scripting. It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes 
          care of your data. 
          If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.

       b. Makes code readable - JSX makes it easier to write code as we are no longer creating elements using React.createElement()

       c. Show more useful errors and warnings

       d. JSX prevents code injections (attacks)

*/
