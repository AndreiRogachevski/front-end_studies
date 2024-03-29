'use strict';
class NumButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }
  increment() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    return <button onClick={() => this.increment()}>{this.state.num}</button>;
  }
}
class HideButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hide: '' };
  }
  hideBtn() {
    this.setState({ hide: 'none' });
    setTimeout(() => this.setState({ hide: '' }), 3000);
  }
  render() {
    return (
      <button
        style={{ display: this.state.hide }}
        onClick={() => this.hideBtn()}
      >
        Hide Me
      </button>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('home-work'));
root.render(
  <React.Fragment>
    <NumButton />
    <HideButton />
  </React.Fragment>
);
