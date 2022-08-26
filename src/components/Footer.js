import React from "react";

class Footer extends React.Component {

  getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
    };

  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="github"/>
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="linkedin"/>
        </div>
        <div className="footer-copyright">
            <p>&copy; All rights reversed | Yazan Alfarra | {this.getCurrentYear()} </p>
        </div>
      </div>
    );
  }
}

export default Footer;
