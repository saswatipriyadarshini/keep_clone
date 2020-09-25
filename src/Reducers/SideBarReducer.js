
import {
  ACTIVE_ITEM
} from 'Actions/SidebarAction';

const sidebar = function(state= {
  activeItem: 'Keep'
}, action){
  switch (action.type) {
    case ACTIVE_ITEM:
      return{
        ...state, activeItem: action.item
      }
    default:
  }
  return state
};

export default sidebar;