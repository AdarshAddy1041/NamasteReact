    const heading = React.createElement("h1" , {id : "heading"} ,"Heello workld")

    // <div id ="parent">
    //     <div id="child1"> <h1>im a child 11</h1></div>
    //             <div id="child2"> <h1>im a child 12</h1></div>
    //     </div>



    const parent = React.createElement("div" , {id : "parent "}[
        React.createElement("div" , {id = "child1"} , [React.createElement("h1" , {} , "im a h1 child 1")]),
        React.createElement("div" , {id = "child2"} , [React.createElement("h1" , {} , "im a h1 child 2")]),
    ]
    );
    

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);''