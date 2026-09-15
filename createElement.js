import React from "react";
import ReactDOM from "react-dom/client";

/*
    <div id="parent">
        <div id="child">
            <h1 id="heading1">I am main heading</h1>
            <h2 id="heading2">I am sub heading</h2>
        </div>
    </div>
*/

const heading = React.createElement(
  "h1",
  { id: "heading1", key: "heading1" },
  "I am main heading",
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2", key: "heading2" },
  "I am sub heading.",
);
const childDiv = React.createElement("div", { id: "child" }, [
  heading,
  heading2,
]);
const parentDiv = React.createElement("div", { id: "parent" }, childDiv);
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(parentDiv);
