import axios from 'axios';

const initialState = [
  {
    description: "poops everywhre",
    name: "tom",
    category: "dog",
    inventoryCount: 5,
    price: 10,
  },
  {
    description: "get out of her way",
    name: "sneaky",
    category: "cat",
    inventoryCount: 5,
    price: 10,
  },
  {
    description: "chews ups everything",
    name: "chewy",
    category: "dog",
    inventoryCount: 5,
    price: 10,
  },
  {
    description: "this one stinks",
    name: "stinky",
    category: "dog",
    inventoryCount: 5,
    price: 10,
  },
  {
    description: "meows a lot",
    name: "jinky",
    category: "cat",
    inventoryCount: 5,
    price: 10,
  },
];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "ADD_TO_CART":
      return state.map((product) => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product;
      });
    case "REMOVE_FROM_CART":

    default:
      return state;
  }
}

export const fetchItems = async (dispatch, getState) => {
  let res = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
  let fetchedProducts = res.data.resuts;

  console.log(fetchedProducts);
  dispatchEvent({
    type: "FETCH_PRODUCTS",
    payload: fetchedProducts,
  });
};
