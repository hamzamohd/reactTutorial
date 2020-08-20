class Square extends React.Component {
  render() {
    <button> This is a Square </button>;
  }
}

export class SquareContainer extends React.Component {
  render() {
    <>
      'This is a square container' <Square />
    </>;
  }
}
