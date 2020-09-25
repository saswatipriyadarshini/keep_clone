import React, { Component } from 'react';
import "./index.css";
import { connect } from "react-redux";
import { setActiveItemAction } from "Actions/SidebarAction";

class SideBar extends Component{
 constructor(props) {
   super(props);
   this.state ={
     items: [
       {name: 'Notes'},
       {name: 'Reminder'},
       {name: 'Edit Labels'},
       {name: 'Archive'},
       {name: 'Trash'}
     ]
   }
 }

 setActiveItem(item){
   if(item === 'Notes'){
     this.props.navBarItem('Keep');
   } else this.props.navBarItem(item);
 }

  render() {
   const {items} = this.state;
    return(
      <div className='kc-sidebar__container'>
        <ul>
          {
            items?.map((item, index) => {
              return (
              <li key={'key'+index} onClick={this.setActiveItem.bind(this, item.name)}>
                {item.name}
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    navBarItem: (item) => {
      dispatch(setActiveItemAction(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);