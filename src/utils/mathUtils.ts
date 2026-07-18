export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = <
  T extends {
    cartItems: Array<{ price: number; quantity: number }>;
    itemsPrice: string;
    shippingPrice: string;
    taxPrice: string;
    totalItems: number;
    totalPrice: string;
    [key: string]: unknown;
  },
>(
  state: T
): T => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc: number, item) => acc + item.price * item.quantity, 0)
  );
  state.shippingPrice = addDecimals(state.itemsPrice === '0.00' ? 0 : 10);
  state.taxPrice = addDecimals(Number((0.15 * Number(state.itemsPrice)).toFixed(2)));
  state.totalItems = state.cartItems.reduce((acc: number, item) => acc + item.quantity, 0);
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('cart', JSON.stringify(state));
  }

  return state;
};
