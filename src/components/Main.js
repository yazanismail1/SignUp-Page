import React from "react";
import LogIn from "./LogIn";

class Main extends React.Component {
  render() {
    return <LogIn showModal={this.props.showModal} />;
  }
}

export default Main;
