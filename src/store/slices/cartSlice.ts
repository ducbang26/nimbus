import { ICartItem } from '@Types/global';
import { updateCart } from '@Utils/mathUtils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface ICartState {
  cartItems: ICartItem[];
  itemsPrice: string;
  shippingPrice: string;
  taxPrice: string;
  totalItems: number;
  totalPrice: string;
  shippingAddress: Record<string, unknown>;
  paymentMethod: string;
}

const initialState: ICartState = {
  cartItems: [],
  itemsPrice: '0.00',
  shippingPrice: '0.00',
  taxPrice: '0.00',
  totalItems: 0,
  totalPrice: '0.00',
  shippingAddress: {},
  paymentMethod: 'Paypal',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCart: (state, action: PayloadAction<Partial<ICartState> | undefined>) => {
      const hydratedCart = action.payload ?? {};

      state.cartItems = Array.isArray(hydratedCart.cartItems)
        ? (hydratedCart.cartItems as ICartItem[])
        : [];
      state.itemsPrice = hydratedCart.itemsPrice ?? '0.00';
      state.shippingPrice = hydratedCart.shippingPrice ?? '0.00';
      state.taxPrice = hydratedCart.taxPrice ?? '0.00';
      state.totalItems = hydratedCart.totalItems ?? 0;
      state.totalPrice = hydratedCart.totalPrice ?? '0.00';
      state.shippingAddress = (hydratedCart.shippingAddress as Record<string, unknown>) ?? {};
      state.paymentMethod = hydratedCart.paymentMethod ?? 'Paypal';
    },

    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const item = action.payload;

      if (!item?._id) {
        return state;
      }

      const normalizedQuantity = Number(item.quantity) > 0 ? Number(item.quantity) : 1;
      const newItem: ICartItem = {
        ...item,
        uuid: item.uuid ?? uuidv4(),
        quantity: normalizedQuantity,
      };

      const existItem = state.cartItems.find((x) => x._id === newItem._id);

      if (existItem) {
        existItem.quantity += newItem.quantity;
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }

      return updateCart(state);
    },

    modifyquantityCartItem: (state, action: PayloadAction<ICartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.uuid === item.uuid);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) => (x.uuid === existItem.uuid ? item : x));
      }

      return updateCart(state);
    },

    modifyAtributesCartItem: (state, action: PayloadAction<ICartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.uuid === item.uuid);

      const duplicatedItem = state.cartItems.find((x) => x._id === item._id);

      if (duplicatedItem) {
        return state;
      } else if (existItem) {
        state.cartItems = state.cartItems.map((x) => (x.uuid === existItem.uuid ? item : x));
      }

      return updateCart(state);
    },

    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x) => !(x._id === item._id));

      return updateCart(state);
    },
    saveShippingAddress: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.shippingAddress = action.payload;

      return updateCart(state);
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;

      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  hydrateCart,
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  modifyquantityCartItem,
  modifyAtributesCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
