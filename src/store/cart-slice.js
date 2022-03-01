import { createSlice } from '@reduxjs/toolkit';

// create a initial state that will store the cart items, the items price, the items quantity and the items total price in an object
const initialState = {
    cartItems: [],
    cartTotal: 0,
    cartQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { title, price, quantity } = action.payload;
            const item = { title, price, quantity, total: price * quantity };
            // check if the item is already in the cart and if so, increase the quantity and total price by the price and quantity of the item that is being added to the cart
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.title === title,
            );

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.total += price * quantity;
            } else {
                state.cartItems.push(item);
            }
            state.cartTotal += price * quantity;
            state.cartQuantity += quantity;
        },
        removeItem: (state, action) => {
            const { title, price, quantity } = action.payload;
            // check if the item is in the cart and if so, decrease the quantity and total price by the price and quantity of the item that is being removed from the cart
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.title === title,
            );
            if (existingItem) {
                // if the quantity of the item is 1, remove the item from the cart
                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(
                        (cartItem) => cartItem.title !== title,
                    );
                } else {
                    existingItem.quantity -= quantity;
                    existingItem.total -= price * quantity;
                }
            } else {
                return;
            }
            // update the cart total by subtracting the total price of the item that is being removed from the cart
            state.cartTotal -= price;
            state.cartQuantity -= quantity;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartTotal = 0;
            state.cartQuantity = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice;
