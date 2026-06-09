export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: any): any => {
  //Caculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
  );
  //Caculate shipping price (price>100?free:$10)
  state.shippingPrice = addDecimals(state.itemsPrice === "0.00" ? 0 : 10);
  //Caculate tax price (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  state.totalItems = state.cartItems.reduce((acc: any, item: any) => acc + item.quantity, 0);
  //Caculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
