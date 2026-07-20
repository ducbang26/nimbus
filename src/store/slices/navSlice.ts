import { createSlice } from '@reduxjs/toolkit';

interface INavState {
  isNavOpen: boolean;
}

const initialState: INavState = {
  isNavOpen: false,
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
  },
});

export const { toggleNav, openNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
