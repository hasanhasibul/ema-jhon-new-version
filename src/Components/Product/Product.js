import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name,img,price,stock,seller,key} = props.product;
    return (
        <div className="product-div" >
            <div className="img">
              <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4><Link to={"/product/"+key} >{name}</Link></h4>
                <p> by : {seller} </p>
                <p> Price : $ {price}</p>
                <p><small>only {stock} is available ,order soon </small></p>
                {
                    props.showButton &&
                    <button className="main-button" onClick={()=>props.handleAddProduct(props.product)} > <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                }
            </div> 
        </div>
    );
};

export default Product;