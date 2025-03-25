import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // Make sure this matches the correct property
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
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
