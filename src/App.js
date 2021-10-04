import React from "react";
//import Potato from "./Potato";

const Food = ({ fav }) => {
  //console.log(props, "props");
  //return <h3>I love {props.fav}</h3>;
  return <h3>I love {fav}</h3>;
};

function App() {
  return (
    //<div className="App"/>
    <div>
      <h1>Hello</h1>
      <Food
        fav="kimchi"
        // something={true}
        // papapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
