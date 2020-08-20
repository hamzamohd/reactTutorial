class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.handleCheck}>
        {this.props.checked ? (this.props.cross ? "X" : "0") : ""}
      </button>
    );
  }
}

class Board extends React.Component {
  state = {
    nextCross: true,
    checked: Array(9).fill(0),
  };

  renderSquare(i) {
    return (
      <Square
        checked={this.state.checked[i]}
        cross={this.state.nextCross}
        handleCheck={() => {
          const newChecked = [...this.state.checked];
          newChecked[i] = 1;
          this.setState({
            checked: newChecked,
            nextCross: !this.state.nextCross,
          });
        }}
      />
    );
  }

  render() {
    const status = "Next player: X";

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

export class Game extends React.Component {
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
