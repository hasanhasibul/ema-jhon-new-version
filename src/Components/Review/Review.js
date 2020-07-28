import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart'
import image from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [placeOrder,setPlaceOrder] = useState(false);
     const hadlePlaceOrder = () =>{
         setCart([]);
         setPlaceOrder(true);
         processOrder();
     }
     let happyImage ;
     if(placeOrder){
         happyImage = <img src={image} alt=""/>
     }
    const handleRomove = (productKey) =>{
       const newCart = cart.filter(pd=>pd.key !== productKey);
       setCart(newCart);
       removeFromDatabaseCart(productKey);

    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const cartProduct =  productKey.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return  product;
        })   
        setCart(cartProduct);
        
    },[]);

    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItems handleRomove={handleRomove} product={pd}></ReviewItems>)
            }
            {
                happyImage
            }
            </div>
            
            <div className="cart-container">
                <Cart cart= {cart} >
                    <button onClick={hadlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;