import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from  "./CheckoutProduct";
import { useStateValue } from './StateProvider';
import Header from "./Header";


function Checkout() {
  const [{basket}, distpatch] = useStateValue ();
  return (
  <div className="{Header}">
    <Header />
  
    <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://simage.lottechilsung.co.kr/display/corner/2829/goodsShop_cateBanner_70_PC.jpg"
                     alt=""/>

               <div>
                 <h1 className="checkout_title">
                      장바구니

                 </h1>

                 {basket.map(item => (
                    <CheckoutProduct 
                     id={item.id}
                     title={item.title}
                     image={item.image} 
                     price={item.price} 
                     rating={item.rating} 
                     />
                  ))}



                </div>
              </div>

             <div className="checkout_right">
                  <Subtotal />

              </div>


            
  
     </div>
    </div>
  );
}

export default Checkout;