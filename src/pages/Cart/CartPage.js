import { useCart } from "../../context/CartContext";
import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";

import { Title } from "../../hooks"
export const CartPage = ({title}) => {
  
  const  {cartList,total, clearCart} = useCart();
  Title(`${title} (${cartList.length})`);

  return (
    <main> 
      {cartList.length ? <CartList  cartList={cartList} total={total} clearCart={clearCart}/>:<CartEmpty/> }
    </main>
  )
}
