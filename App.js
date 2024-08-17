
const ele = React.createElement("h1" , {id : "ele"} , "Hello there");

const  root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(ele);

// console.log("ele is" , ele);


const parent = React.createElement("div" , {id:"parent"} , React.createElement("h1" , {id: "child1"} ,[
    
    React.createElement("h2" , {id: "sibling1"} , "I am sibling 1") ,
    React.createElement("h2" , {id : "sibling2"} , "I am sibling2")

]) ,
React.createElement("h1" , {id: "child1"} ,[
    
    React.createElement("h2" , {id: "sibling1"} , "I am sibling 1") ,
    React.createElement("h2" , {id : "sibling2"} , "I am sibling2")

])
);


console.log("parent is" , parent);

root.render(parent);

