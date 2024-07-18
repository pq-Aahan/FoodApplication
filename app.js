/*
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *      <h1></h1>
 *      <h2></h2>
 *      </div>
 * </div>
*/



const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an h1 tag")))
const parent2= React.createElement("div",{id:"parent2"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]))
const parent3= React.createElement("div",{id:"parent3"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]))

const heading=React.createElement("h1",{id: "heading" },"Hello world from react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent3);
