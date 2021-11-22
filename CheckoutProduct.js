import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
  
  return (
   
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          {title}
        </p>

        <p className="checkoutProduct_price">
           <small>w</small>
           <strong>{price}</strong>
           <small>원</small>
        </p>

        <div className="checkoutProduct_rating">
           {
             Array(rating)
              .fill()
              .map(() => (
                <p>★</p>
              ))
          }
        </div>

        <button>장바구니에서 삭제</button>

      </div>
    </div>
  );
}

export default CheckoutProduct;