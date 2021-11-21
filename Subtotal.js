import React from "react";
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  
  return (
   <div className="subtotal">
     <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>

             ( 총 금액 ( {basket?.length} items) : <strong> {value}원 </strong>


             </p>
               <small className="subtotal_gift">
                  <input type="checkbox" /> 전체 선택

                </small>
      
          </>

      )}
     declmalScale={2}
     value={getBasketTotal(basket)}
     displayType={"text"}
     thousandSepartor={true}
     prefix={"w"}

     />

     <button>결제하기</button>

   </div>
  );
}

export default Subtotal;