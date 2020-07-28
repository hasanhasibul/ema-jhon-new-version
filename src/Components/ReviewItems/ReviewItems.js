import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {name,quantity,key,price} = props.product;
    return (
        <div className="reviewItems" >
            <h3> {name} </h3>
            <p> Quantity : {quantity} </p>
            <p><small> price : ${price}</small></p>
            <button onClick={()=>props.handleRomove(key)} className="main-button" >remove</button>
        </div>
        
    );
};

export default ReviewItems;