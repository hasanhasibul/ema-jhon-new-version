import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [product,setProduct] = useState(firstTen);
    const [cart,setCart] = useState([]);

   const handleAddProduct = (product) =>{
       const newCart = [...cart,product]
       setCart(newCart);

   }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart= {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;