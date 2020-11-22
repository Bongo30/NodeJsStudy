import logo from './logo.svg';
import './App.css';
import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
// class Square extends React.Component {

//   // constructor(props) {
//   //   super(props);
//   //     this.state={  value2 : null, };
//   // }
  
//   render() {
//     return (
//       <button className="square" onClick={ ()=>this.props.onClick() }>
//         {this.props.value}
//       </button>
//     );
//   }
// }

class Board extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        squares : Array(9).fill(null),
        XisNext : true,
      };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.XisNext ? 'X' : 'O';
    //squares[i] = 'X';
    this.setState(
      {
        squares: squares,
        XisNext: !this.state.XisNext,
      }
      );
  }
  renderSquare(i) {  
    return (
    <Square value={this.state.squares[i]}
            onClick={()=>this.handleClick(i)}
    />
    );
  }


  render() {
    const status = 'Next player: X'+ (this.state.xIsNext ? 'X' : 'O');;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );





function App() {
  return (
    <Game />
  );
}

export default App;
