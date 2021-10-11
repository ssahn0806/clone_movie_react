import React, { useState, useEffect } from "react";

// // React.Component에 정의되어 있는 내용을 상속받아 사용가능 하게됨.
// class App extends React.Component {
//   /*State object - variant */
//   state = {
//     count: 0,
//   };

//   // React can't mutate state Directly.
//   // By setState -> update State -> Rerender -> update visual source;
//   // Targeting the update source - do not refresh all.

//   add = () => {
//     //console.log("add");
//     // this.state.count++;
//     // this.setState({ count: 1 });
//     // this.setState({ count: this.state.count + 1 });
//     // this.state.count = ReadOnly
//     this.setState((current) => ({ count: current.count + 1 }));
//   };

//   minus = () => {
//     //console.log("minus");
//     //this.state.count--;
//     // this.setState({ count: -1 });
//     // this.setState({ count: this.state.count - 1 });
//     this.setState((current) => ({ count: current.count - 1 }));
//   };

//   constructor(props) {
//     super(props);
//     console.log("This is constructor");
//   }

//   componentDidMount() {
//     console.log("This is componentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("This is componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("This is componentWillUnmount");
//   }
//   /* Class component returns JSX by render methods<상속에 의해 override> */
//   render() {
//     console.log("This is render");
//     // return <h1>I'm a class component</h1>;
//     // return <h1>The number is: {this.state.count}</h1>;
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         {/*manipulate state value by button's event handler*/}
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// const App = () => {
//   const [count, setCount] = useState(0);

//   const add = () => {
//     setCount((prev) => prev + 1);
//   };

//   const minus = () => {
//     setCount((prev) => prev - 1);
//   };
//   return (
//     <div>
//       <h1>The number is : {count} </h1>
//       <button onClick={add}>Add</button>
//       <button onClick={minus}>Minus</button>
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {/* {this.state.isLoading ? "로딩중입니다..." : "로딩이 완료되었습니다."} */}
        {isLoading ? "로딩중입니다..." : "로딩이 완료되었습니다."}
      </div>
    );
  }
}

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     console.log("component DidMount");
//     setTimeout(() => {
//       /* Data Loading */
//       setIsLoading(false);
//     }, 5000);
//   }, []);
//   return <div>{isLoading ? "로딩중입니다..." : "로딩이 완료되었습니다."}</div>;
// };
export default App;
