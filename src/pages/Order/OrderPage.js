import {OrderSuccess} from "./components/OrderSuccess"
import {OrderFail} from "./components/OrderFail"
import { useLocation } from "react-router-dom";

import { Title } from "../../hooks/Title"
export const OrderPage = ({title}) => {
  
  const { state } = useLocation();
  Title(`${title} (${state.data.cartList.length})`);
  return (
    <main>
      {state.status ? (<OrderSuccess data={state.data} />) : (<OrderFail  data={state.data}/>)}
    </main>
  )
}
