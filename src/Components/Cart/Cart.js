import React from 'react';
import './Cart.css'

const cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0 ;
    if(total>50){
        shipping = 12.99;
    }

    else if (total > 30){
        shipping = 4.99
    }
    
    let tex  = (total/10);

    const grandTotal = total + tex + shipping ;

    const numbering = (num) =>{
        const roundShape = num.toFixed(2);
        return Number(roundShape);
    }

    return (
        <div className="cart" >
           <h3>order Summery : </h3> 
           <p> items Ordered : {cart.length} </p>
           <p>Price : {total} </p>
           <p>Tex : {numbering(tex)}</p>
           <p>shipping Cost :  {numbering(shipping)} </p>
           <h3>Grand Total : {numbering(grandTotal)} </h3>
        </div>
    );
};

export default cart;