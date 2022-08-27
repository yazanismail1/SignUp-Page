import React from "react";
import Main from "./Main";
import SignUp from "./SignUp";
import "../Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Main showModal={this.showModal} />
        <SignUp show={this.state.show} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;
