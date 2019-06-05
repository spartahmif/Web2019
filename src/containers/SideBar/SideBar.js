import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu,Image} from 'semantic-ui-react';
import './SideBar.scss';
import logo from '../../assets/images/spartalogo.png';

export class SideBar extends React.Component {
    render() {
        return (
          <Menu borderless vertical stackable fixed='left' className='side-nav'>
            <SideBarItem label='Profile' icon='address card'/>
            <SideBarItem highlight={true} label='Dashboard' icon='thumb tack'/>
            <SideBarItem label='Submission' icon='file'/>
            <Menu.Menu className='side-nav-container'>
                <Menu.Item className='logo'>
                    <Image src={logo} size='medium'></Image>
                </Menu.Item>
            </Menu.Menu>
          </Menu>
        );
      }
}