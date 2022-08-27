import React from "react";
import Main from "./Main"
import SignUp from "./SignUp";
import '../Styles/App.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Main />
        <SignUp />
      </div>
    )
  }
  

}

export default App;
