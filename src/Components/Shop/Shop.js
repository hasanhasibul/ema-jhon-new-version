import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [product,setProduct] = useState(firstTen);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const saveCart =  getDatabaseCart();
        const productKeys  = Object.keys(saveCart);
        const Cartproduct = productKeys.map(key=>{
        const product = fakeData.find(pd=>pd.key === key);
        product.quantity = saveCart[key];
        return product ;
        })
        setCart(Cartproduct);
    },[]);

   const handleAddProduct = (product) =>{
       const productKey = product.key;

       const sameProduct = cart.find(pd=>pd.key === productKey);


       let newCart;
       let count = 1 ;

       if(sameProduct){
          count = sameProduct.quantity +1 ;
          sameProduct.quantity = count;
          const other = cart.filter(pd => pd.key !==productKey);
          newCart =[...other,sameProduct];
       }
       else{
           product.quantity = 1;
           newCart =[...cart,product];
       }
       setCart(newCart);
       addToDatabaseCart(product.key,count)
   }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product  showButton={true} handleAddProduct={handleAddProduct} product={pd} ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart= {cart} >
                <Link to="/review"> <button className="main-button" >review order</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;