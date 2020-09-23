import React, {Component} from "react";
import "./index.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { AppstoreOutlined, MenuOutlined, SearchOutlined, UndoOutlined, SettingOutlined, BorderBottomOutlined } from '@ant-design/icons';
import {Input} from 'antd';
import 'antd/dist/antd.css';

export default class NavBar extends Component{
  render() {
    return(
      <>
        <div className='kc-navbar__container'>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <MenuOutlined/>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt=""/>Keep
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className='m-auto'>
                {/*<NavItem>*/}
                  <Input prefix={<SearchOutlined />} />
                {/*</NavItem>*/}
              </Nav>
              <Nav className='ml-auto'>
                <NavItem>
                  <UndoOutlined />
                </NavItem>
                <NavItem>
                  <AppstoreOutlined className='kc-navbar-right-items'/>
                {/*  <PauseOutlined />*/}
                </NavItem>
                <NavItem>
                  <SettingOutlined />
                </NavItem>
                <NavItem>
                  <BorderBottomOutlined />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    )
  }
}