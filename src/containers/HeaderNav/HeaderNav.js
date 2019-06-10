import React from 'react';
import {Button, Icon, Image, Menu, Modal, Form, ModalActions, ModalContent} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/profile.svg';

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu color= 'yellow' inverted borderless className='top-menu' fixed='top'>
        <Menu.Item header className='user-logo'>
            <Image src={logo} size='mini' avatar />
            <span className='user'>Username</span>
        </Menu.Item>
        <Menu.Menu className='nav-container'>
          <Menu.Item className='title'>
            <span className='title'>Title</span>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Modal 
                trigger= {
                <Button icon color='blue' labelPosition='left'>
                  <Icon className='header-icon' name='setting' size='large' />
                  Change Password
                </Button>
                } closeIcon>
                <ModalContent>
                <Form>
                    <Form.Field>
                      <label>Old Password</label>
                      <input type='password' />
                    </Form.Field>
                    <Form.Field>
                      <label>New Password</label>
                      <input type='password' />
                    </Form.Field>
                    <Form.Field>
                      <label>Confirm New Password</label>
                      <input type='password' />
                    </Form.Field>
                  </Form>
                </ModalContent>
                <ModalActions>
                  <Button color='red'>
                    Cancel
                  </Button>
                  <Button color='green'>
                    Submit
                  </Button>
                </ModalActions>
              </Modal>
            </Menu.Item>
            <Menu.Item>
              <Button icon color='blue' labelPosition='left'>
                <Icon className='header-icon' name='sign out' size='large' />
                Log Out
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;