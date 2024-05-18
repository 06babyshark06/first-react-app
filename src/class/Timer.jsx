import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  tick = () => {
    this.setState({ time: new Date() });
  };
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    console.log(this.state.time);
    return (
      <>
        <div>{this.state.time.toLocaleTimeString()}</div>
      </>
    );
  }
}
export default Timer;
