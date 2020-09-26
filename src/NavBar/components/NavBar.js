import React, {Component} from "react";
import "./index.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { AppstoreOutlined, MenuOutlined, SearchOutlined, UndoOutlined, SettingOutlined, BorderBottomOutlined } from '@ant-design/icons';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import {connect} from "react-redux";

class NavBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'Keep'
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.activeItem){
      return {name: props.activeItem}
    }
    return state
  }

  render() {
    const {name} = this.state;
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
                  {
                    name === 'Keep' &&
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt=""/>
                  }
                  <NavLink href="#" style={{display: 'flex', alignItems: 'center', width: '15rem'}}>
                    <h3>{name}</h3>
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

const mapStateToProps = (state) => ({
  activeItem: state.sidebar.activeItem
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);