import { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", welcomeMessage: "" };
  }
  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ welcomeMessage: `Hello ${this.state.username}` });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tên đăng nhập:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Đăng nhập</button>
        <p>{this.state.welcomeMessage}</p>
      </form>
    );
  }
}
export default LoginForm;