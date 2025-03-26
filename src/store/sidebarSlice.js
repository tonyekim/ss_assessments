const initialState = {
  isOpen: false,
  isMobileOpen: false,
};


export const OPEN_SIDEBAR = "sidebar/openSidebar";
export const CLOSE_SIDEBAR = "sidebar/closeSidebar";
export const TOGGLE_SIDEBAR = "sidebar/toggleSidebar";
export const OPEN_MOBILE_SIDEBAR = "sidebar/openMobileSidebar";
export const CLOSE_MOBILE_SIDEBAR = "sidebar/closeMobileSidebar";


export const openSidebar = () => ({ type: OPEN_SIDEBAR });
export const closeSidebar = () => ({ type: CLOSE_SIDEBAR });
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
export const openMobileSidebar = () => ({ type: OPEN_MOBILE_SIDEBAR });
export const closeMobileSidebar = () => ({ type: CLOSE_MOBILE_SIDEBAR });


const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isOpen: false };
    case TOGGLE_SIDEBAR:
      return { ...state, isOpen: !state.isOpen };
    case OPEN_MOBILE_SIDEBAR:
      return { ...state, isMobileOpen: true };
    case CLOSE_MOBILE_SIDEBAR:
      return { ...state, isMobileOpen: false };
    default:
      return state;
  }
};

export default sidebarReducer;

