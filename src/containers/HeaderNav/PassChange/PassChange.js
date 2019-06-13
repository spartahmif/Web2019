import React from "react";
import {
  Modal,
  ModalActions,
  ModalContent,
  Form,
  Icon,
  Button
} from "semantic-ui-react";

export class PassChange extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button
            icon
            color="blue"
            labelPosition="left"
            onClick={this.handleOpen}
          >
            <Icon className="header-icon" name="setting" size="large" />
            Change Password
          </Button>
        }
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContent>
          <Form>
            <Form.Field>
              <label>Old Password</label>
              <input type="password" />
            </Form.Field>
            <Form.Field>
              <label>New Password</label>
              <input type="password" />
            </Form.Field>
            <Form.Field>
              <label>Confirm New Password</label>
              <input type="password" />
            </Form.Field>
          </Form>
        </ModalContent>
        <ModalActions>
          <Button color="green" onClick={this.handleClose}>
            Submit
          </Button>
        </ModalActions>
      </Modal>
    );
  }
}

export default PassChange;
