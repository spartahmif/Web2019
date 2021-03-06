import React from "react";
import {
  Modal,
  ModalActions,
  ModalContent,
  Form,
  Button
} from "semantic-ui-react";
import "./PassChange.scss";

export class PassChange extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      newPassword: "",
      reEnter: "",
      valid: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handlePassword = evt => {
    this.setState({ password: evt.target.value });
    this.checkValid();
  };

  handleNewPassword = evt => {
    this.setState({ newPassword: evt.target.value });
    this.checkValid();
  };

  handleReEnter = evt => {
    this.setState({ reEnter: evt.target.value });
    this.checkValid();
  };

  checkValid = () => {
    const { password, newPassword, reEnter } = this.state;
    newPassword.length >= 8 && newPassword === reEnter
      ? this.setState({ valid: true })
      : this.setState({ valid: false });
  };

  render() {
    return (
      <Modal
        trigger={
          <div className="trigger" onClick={this.handleOpen}>
            <span>Change Password</span>
          </div>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContent>
          <Form>
            <Form.Field>
              <label>Old Password</label>
              <input type="password" onChange={this.handlePassword} />
            </Form.Field>
            <Form.Field>
              <label>New Password</label>
              <label>Password should be at least 8 characters long</label>
              <input type="password" onChange={this.handleNewPassword} />
              <label>{this.state.newPassword}</label>
            </Form.Field>
            <Form.Field>
              <label>Confirm New Password</label>
              <input type="password" onChange={this.handleReEnter} />
              <label>{this.state.reEnter}</label>
              <label>{this.state.valid}</label>
            </Form.Field>
          </Form>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={this.handleClose}>
            Cancel
          </Button>
          <Button
            disabled={!this.state.valid}
            color="green"
            onClick={this.handleClose}
          >
            Submit
          </Button>
        </ModalActions>
      </Modal>
    );
  }
}

export default PassChange;
