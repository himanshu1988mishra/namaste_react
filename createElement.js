const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "I am main heading",
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "I am sub heading",
);
const childDiv = React.createElement("div", { id: "child" }, [
  heading,
  heading2,
]);
const parentDiv = React.createElement("div", { id: "parent" }, childDiv);
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(parentDiv);

/*
 * This is a simple React application that creates a hierarchy of elements and renders them to the DOM.
 * heading, heading2 etc. are react elements not HTML elements, those are actually objects.
 * when ReactDOM renders reactRoot then ReactDOM creates HTML elements from those react elements and adds them to the DOM.
 */
