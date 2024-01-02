import React, {useState} from 'react';
import './App.css';
import Block from './components/block';
import { stat } from 'fs';

function App() {
  
  const [state, setState] = useState(Array(9).fill(null));
  const [currenTurn, setTurn] = useState("X");

  const checkWinner = (state : any[]) => {
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < win.length; i++ ) {
      const [a,b,c] = win[i];

      if (state[a]!== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  }

  const handleClicks = ( index : number ) => {
    const copyState = Array.from(state);
    if (copyState[index] != null) {
      return false; 
    }

    copyState[index] = currenTurn;
    if(checkWinner(copyState)) alert('winner');
    setState(copyState);
    setTurn(currenTurn == 'X' ? 'O' : 'X');
  };

  return (
    <div className = "board">
      <div className ='row'>
        <Block onClick={() => handleClicks(0)} value = {state[0]} /> 
        <Block onClick={() => handleClicks(1)} value = {state[1]} /> 
        <Block onClick={() => handleClicks(2)} value = {state[2]}  /> 
      </div>
      <div className ='row'>
        <Block onClick={() => handleClicks(3)} value = {state[3]}  /> 
        <Block onClick={() => handleClicks(4)} value = {state[4]}  /> 
        <Block onClick={() => handleClicks(5)} value = {state[5]}  /> 
      </div>
      <div className ='row'>
        <Block onClick={() => handleClicks(6)} value = {state[6]}  /> 
        <Block onClick={() => handleClicks(7)} value = {state[7]}  /> 
        <Block onClick={() => handleClicks(8)} value = {state[8]}  /> 
      </div>
    </div>
  );
}

export default App;
