import { Component } from 'react';
export default class ShowImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      images: props.url,
      image: 0,
    };
    this.error = this.error.bind(this);
    this.load = this.load.bind(this);
    this.change = this.change.bind(this);
  }
  error() {
    this.setState({ error: 'error' });
  }
  load() {
    this.setState({ error: '' });
  }
  change(value) {
    let num = this.state.image + value;
    const array = this.state.images.length;
    if (num < 0) {
      num = array - 1;
    }
    if (num > array - 1) {
      num = 0;
    }
    this.setState({ image: num });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.change(-1)}>previos</button>
        <button onClick={() => this.change(+1)}>next</button>
        <p>{this.state.error}</p>
        <img
          src={this.state.images[this.state.image]}
          onLoad={this.load}
          onError={this.error}
        />
      </div>
    );
  }
}
