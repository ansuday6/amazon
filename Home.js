import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {
 
  return (
     
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
        alt=""/>

        <div className="home_row">

          <Product
           id="2323"
           title="DAY6(Even of Day) 2nd Mini Album"
           price={12900} image="https://m.withdrama.co.kr/web/product/medium/202107/df0f30b70f46584ae59534e4b81935cb.jpg"
           rating={5}/>

          <Product 
           id="2320"
           title="DAY6 - 공식밴드 VER2"
           price={33000} image="https://m.withdrama.co.kr/web/product/medium/202012/989bd6241d7ea0abceb9cb99d03a40ed.jpg"
           rating={5}/>


        </div>


        <div className="home_row">

          <Product 
           id="2321"
           title="DAY6 - The Book of Us : Negentropy - Chaos swallowed up in love / 7집 미니앨범"
           price={13400} 
           image="https://m.withdrama.co.kr/web/product/medium/202104/124423129b823ef33cbf60d54da2b95f.jpg"
           rating={5}/>

         <Product  
           id="2322"
           title="DAY6(Even of Day) - 07 PIL 젤리 케이스 / 2020 Gluon"
           price={20000} 
           image="https://m.withdrama.co.kr/web/product/medium/202009/89888a2b2b14a311f6e41706093da61b.jpg"
           rating={5}/>          



        

        </div>

        
        <div className="home_row">

         <Product 
           id="2325"
           title="DAY6(Even of Day) - 10 비하인드 포토카드 세트 / 2020 Gluon"
           price={15000} 
           image="https://m.withdrama.co.kr/web/product/medium/202009/3b484c7bdc500ecf02fcbf5d5cc48ba3.jpg"
           rating={5}/>


        </div>




      </div>
      
    
    </div>
  );
}

export default Home;
