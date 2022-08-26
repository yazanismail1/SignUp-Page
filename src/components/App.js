import React from "react";
import Main from "./Main"
import SignUp from "./SignUp";
import Header from "./Header";
import Footer from "./Footer";


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
        <SignUp />
        <Footer />
      </div>
    )
  }
  

}

export default App;
