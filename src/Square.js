import React, {Component} from 'react';
import red from './red.png'
import blue from './blue.png'
import blank from './blank.png'
import { __values } from 'tslib';


class Square extends React.Component {
  constructor (props) {
      super(props)
  }

  handleClick = () => {  
    return this.props.squareHandleClick(this.props.id)
  }


 render() { 
   
  return (
      <div className = "square" onClick={this.handleClick}>
        <p>{this.props.value}</p>
        {/* <img className = "face" src = {blank} alt = {blank}></img> */}
      </div>
  );
 }
}

export default Square;










// const Square = (props) => {

//   const handleClick = () => {
//     const {id, handleClick} = props
//     let modId = id + 7;
//     let column = 0;
//     for(let i = 0; i < 7; i++){
//       column = i;
//       if((modId-i)%7 == 0){
//         break;
//       }
//     }
//     return handleClick();
//   }
//   return (
//       <div className = "square" onClick={handleClick}>
//         <img className = "face" src = {props.value==2 ? blue : props.value ==1 ? red : blank } alt = {blank}></img>
//       </div>
//   );
// }