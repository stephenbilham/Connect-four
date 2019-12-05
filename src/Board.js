import React, { useState } from 'react';
import Square from "./Square.js";
import wc from "./WinningConditions.js"
import winningConditions from './WinningConditions.js';
import { red } from 'ansi-colors';

let squares = Array(42).fill(0);
let player1 = [];
let player2 = [];
let winningPlayer = 0;
let player1Turn = true;
let gameOver = false;
let hoverColumn = -1
let animationRunning = false
let baseSpeed = 1.25;



class Board extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            updated: false
        }
    }

    finalTop = {
        "--finalTop": "500%"
      };
    dropTime = {
        "--dropTime": "1.5s"
      };


        // IF square id/value? is !0 return (so players cannot click on the piece again) 

        // push the playersTurn into the independent players empty array 

        // if player array contains an array of === possible winning conditons game over 
        //if not keep playing 
        

        // reset grid to default value whenever 
        resetButton = () => {
             squares = Array(42).fill(0);
             player1 = [];
             player2 = [];
             winningPlayer = 0;
             player1Turn = true;
             gameOver = false;
             this.setState({updated: !this.state.updated})
        }

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
        // console.log(index, column)
        squares[targetSquare] =  player1Turn ? 1 : 2
        if (player1Turn) {
            player1.push(targetSquare)
        }
        else {
            player2.push(targetSquare)
        }
        player1Turn = !player1Turn
        if(this.checkIfWinner(1)){
            gameOver = true 
            winningPlayer = 1
            alert("Player 1 wins")
        } else if(this.checkIfWinner(2)){
            gameOver = true
            winningPlayer = 2
            alert("Player 2 wins")
        }
        this.setState({updated: !this.state.updated})
    }
    //playerID is 1 for player1 and 2 for player2
    
   
    checkIfWinner = (playerID) => { 
        let playerArr = playerID === 1 ? player1 : player2
        let winningConditions = wc.getAllWinConditions()
        let playerWins = false
        for (let i = 0;i < winningConditions.length; i++) {
            let curWinningConditions = winningConditions[i]
            playerWins = true
            for(let j = 0; j < curWinningConditions.length; j++) {
                if (!playerArr.includes(curWinningConditions[j])){
                    playerWins = false
                    break;
                }
            }
            if(playerWins){
                break;
            }
        }
        return playerWins
    }
    
 
    render(){

        let grid = squares.map((element, i) => {
             return (
                 <Square key={i.toString()} id={i} value={element} squareHandleClick={this.boardHandleClick}></Square>
             )
        })
        
      return (
        <div>
            <h1 className="game-header">Connect Four!</h1>
            <div  className = "grid">
                {grid}
            </div>   
            <div>
                <button className="button" onClick={this.resetButton}>Reset Game</button>
            </div>
        </div>
       
      );
    }
  }
  
  

export default Board;


