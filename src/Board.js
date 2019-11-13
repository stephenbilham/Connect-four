import React, { useState } from 'react';
import Square from "./Square.js";

let squares = Array(42).fill(0);
let player1 = [];
let player2 = [];
let winningPlayer = 0;
let player1Turn = true;
let gameOver = false;

class Board extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            updated: false
        }
    }


        // IF square id/value? is !0 return (so players cannot click on the piece again) 

        // push the playersTurn into the independent players empty array 

        // if player array contains an array of === possible winning conditons game over 
        //if not keep playing 
        

        // reset grid to default value whenever 
        //  grid = Array.(42).fill
        //  player1 = []
        // player2 = []

        // make handleclick number 2 
    boardHandleClick = (index) => { 
        //function to find player turn/ print players id in square with onclick
        // ex. if (player1Turn === true ? return 1 : 2)
        //change value of square at index
        if (squares[index] != 0) { 
            return 
        }
        if (gameOver) { 
            return
        }
        let column = index % 7
        let columnArr = []
        for (let i = 0; i < 6; i++){
            columnArr.push(i*7 + column)
        }
        let targetSquare = columnArr[0]
        for (let i = columnArr.length - 1; i >= 0; i--) { 
            if(squares[columnArr[i]] === 0) { 
                targetSquare = columnArr[i]
                break;
            }
        }

        
        console.log(index, column)
        squares[targetSquare] =  player1Turn ? 1 : 2
        player1Turn = !player1Turn


        this.setState({updated: !this.state.updated})
    }


    render(){

        //create a lines for the SQUARES of the grid ex 1px solid, black

        let grid = squares.map((element, i) => {
             return (
                 <Square key={i.toString()} id={i} value={element} squareHandleClick={this.boardHandleClick}></Square>
             )
        })
        
      return (
        <div>
            <div  className = "grid">
                {grid}
            </div>   
        </div>
       
      );
    }
  }
  
  

export default Board;

