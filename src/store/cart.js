const { CardActions } = require("@material-ui/core");

const initialState = [];

export default function cartReducer(state = initialState, action){
  switch(CardActions.type){
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_CART':
    default:
      return state;
  }
}

export function addToCart(product){
  return{
    type: 'ADD_TO_CART',
    payload: product,
  }
}