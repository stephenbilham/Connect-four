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
        <img className = "pieceSize" className = "face" src = {this.props.value === 0 ? blank : this.props.value === 1 ? red : blue} alt = {blank} ></img>
      </div>
  );
 }
}

export default Square;


