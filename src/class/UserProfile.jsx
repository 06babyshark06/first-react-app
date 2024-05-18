import { Component } from "react";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  state = {
    color: "#FFFFFF",
  };
  handleClick = () => {
    this.setState({ color: "aqua" });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };
  render() {
    return (
      <div style={{backgroundColor:this.state.color}}>
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <button onClick={this.handleClick}>Thay đổi màu nền</button>
        {/* <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">Submit</button>
        </form> */}
      </div>
    );
  }
}
export default UserProfile;
