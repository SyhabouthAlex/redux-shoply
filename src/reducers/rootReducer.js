import data from "../data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

const INITIAL_STATE = { cart: {}, cartValue: 0, products: data.products};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cart[action.item.name]) {
                return {...state, cart: {...state.cart, 
                    [action.item.name]: {
                        ...action.item,
                        count: state.cart[action.item.name].count + 1
                    }
                }, cartValue: state.cartValue + action.value}
            }
            else {
                return {...state, cart: {...state.cart,
                    [action.item.name]: {
                        ...action.item,
                        count: 1
                    }
                }, cartValue: state.cartValue + action.value}
            }
        case REMOVE_FROM_CART:
            if (state.cart[action.name].count > 1) {
                return {...state, cart: {...state.cart, 
                    [action.name]: {
                        ...state.cart[action.name],
                        count: state.cart[action.name].count - 1
                    }
                }, cartValue: state.cartValue - action.value}
            }
            else if (state.cart[action.name].count === 1) {
                const newCart = {};
                for (let item in state.cart) {
                    if (item !== action.name) newCart[item] = state.cart[item];
                }
                return {...state, cart: newCart, cartValue: state.cartValue - action.value}
            }
            else return state;
        default:
            return state;
    }
}

export default rootReducer;