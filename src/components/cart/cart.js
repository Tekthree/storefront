import { useSelector } from "react-redux";

function cart(){
  let cartItems = useSelector(state => state.cart);

  return(
    <>
    <h2>this is my cart</h2>
    </>
  )
}