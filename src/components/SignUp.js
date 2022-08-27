import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "../Styles/Signup.css";

class SignUp extends React.Component {
  render() {
    return (
      <Modal className="modal" show={this.props.show}>
        <Modal.Header
          closeButton
          onHide={() => {
            this.props.closeModal();
          }}
        >
          <h3>Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="names">
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-3 input-name"
            >
              <Form.Control type="text" placeholder="John Snow" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3 input-username"
            >
              <Form.Control type="text" placeholder="John Snow" />
            </FloatingLabel>
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 input-email"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <div className="pass">
            <FloatingLabel
              className="input-pass"
              controlId="floatingPassword"
              label="Password"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              className="input confirmPass"
              controlId="floatingPassword"
              label="Confirm Password"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </div>
          <div className="d-grid gap-2 btn-sgnup">
            <Button size="lg btn-signup">Sign Up</Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SignUp;
