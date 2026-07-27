import { configureStore } from '@reduxjs/toolkit';

import cartSlideReducer from './slices/cartSlice';
import navReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlideReducer,
    nav: navReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
