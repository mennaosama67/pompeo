import { DataContext } from "../ProductData/DataProvider";
import React, { useContext, useEffect, useState } from "react";
import SubHeader from "../Header/SubHeader";

import "./Cart.css";
function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = () => {
        const res = cart.reduce((prev, item) => {
          return prev + (item.price*item.amount) ;
        }, 0);

        setTotal(res);
      
    };

    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return <h1 className="empty">Cart is Empty</h1>;
  }

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);
      }
    });
    setCart([...cart])
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
    });
    setCart([...cart])
  };
const removeProduct=(id)=>{
    cart.forEach((item,index)=>{
        if(item.id===id){
                cart.splice(index,1)
        }
    })
    setCart([...cart])
}
  return (
    <div className="container shop-cart ">
      {cart.map((item) => (
        <div
          className="container card cart-details mx-2 py-5 my-3"
          key={item.id}
        >
          <div className="row ">
            <div className="product-img col-lg-4 col-md-12 col-sm-12">
              <img src={item.image} />
            </div>

            <div className="product-content ms-3  col-lg-4 col-md-12 col-sm-12">
              <SubHeader className="">PRODUCT DETAIL</SubHeader>

              <h2 className="">{item.name}</h2>
              <h4>{`$ ${item.price} USD`}</h4>
              <p>
                The attractions of ceramics lie partly in its contradictions. It
                is both difficult and easy, with an element beyond our control.
              </p>
              <h4>
                Category : <span className="category"> {item.category} </span>
              </h4>

              <h4>Quantity</h4>
              <div className="quantity">
              <button className="count" onClick={()=>reduction(item.id)}>-</button>
                <span>{item.amount}</span>
                <button className="count" onClick={()=>increase(item.id)}> +</button>
              
                <br />
              </div>
              <div className="delete" onClick={()=>removeProduct(item.id)}>Remove</div>
            </div>
          </div>
        </div>
      ))}
      <div className="total pe-5 ">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

export default Cart;
