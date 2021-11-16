import React from 'react';
import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>제품1</p>
        <p className="product_price">
          <small>가격</small>
          <strong>10,000</strong>
          <small>원</small>
        </p>

        <div className="product_rating">
          <p>★</p>
          <p>★</p>
          <p>★</p>
          <p>★</p>


        </div>
      </div>
      
      <img src="https://m.withdrama.co.kr/web/product/medium/202107/df0f30b70f46584ae59534e4b81935cb.jpg" alt=""/>
      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;