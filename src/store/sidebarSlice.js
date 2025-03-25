import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isMobileOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    closeMobileSidebar: (state) => {
      state.isMobileOpen = false;
    },
    openMobileSidebar: (state) => {
      state.isMobileOpen = true;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar, openMobileSidebar, closeMobileSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
