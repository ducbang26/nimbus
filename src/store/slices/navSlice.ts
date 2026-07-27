import { createSlice } from '@reduxjs/toolkit';

interface INavState {
  isNavOpen: boolean;
  isReadyClick: boolean;
}

const initialState: INavState = {
  isNavOpen: false,
  isReadyClick: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    openNav: (state) => {
      state.isNavOpen = true;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
    setDisableBtn: (state): void => {
      state.isReadyClick = true;
    },
    setEnableBtn: (state): void => {
      state.isReadyClick = false;
    },
  },
});

export const { toggleNav, openNav, closeNav, setDisableBtn, setEnableBtn } = navSlice.actions;
export default navSlice.reducer;
