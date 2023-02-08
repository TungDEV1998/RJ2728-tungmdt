import { useState } from "react";



function Session03() {
  const [changeColor, setChangeColor] = useState('yellow');
  const changeRed = () => {
    setChangeColor("red") 
  }
  const changeBlue = () => {
    setChangeColor("blue")
  }
  return (
    <>
      <div style={{color: changeColor}}>Text</div>
      <button onClick={changeRed} disabled={changeColor === "red"}>Red</button>
      <button onClick={changeBlue} disabled={changeColor === "blue"}>Blue</button>
    </>
  );
}

export default Session03;
// import React, { Component } from 'react'

// type Props = {}

// type State = {
//   count: number
// }

// class Session03 extends Component<Props, State> {
//   state = {
//     count: 0
//   }
//   plusNumber = () => {
//     this.setState((state) => ({
//       count: state.count + 1,
//     })) 
//   }

//   minusNumber = () => {
//     this.setState((state) => ({
//       count: state.count - 1,
//     })) 
//   }

//   render() {
//     return (
//       <>
//         <h1>
//           {this.state.count}
//         </h1>
//         <div>Volume</div>
//         <button onClick={this.plusNumber} disabled={this.state.count >= 10 ? true : false}>Plus</button>
//         <button onClick={this.minusNumber} disabled={this.state.count <= 0 ? true : false}>Minus</button>
//         {
//           this.state.count === 10 && <h1>MAX</h1>
//         }
//         </>

//     )
//   }
// }

// export default Session03

