import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "./ItemDetails.css"

function ItemDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const itemsObj = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const item = itemsObj[id];
    if (!item) return <Redirect to="/"/>
    let count = 0;
    if (cart[item.name]) count = cart[item.name].count;

    const addToCart = () => dispatch({ 
        type: ADD_TO_CART, 
        item: {name: item.name, image: item.image_url, price: item.price},
        value: item.price
    });
    const removeFromCart = () => dispatch({ 
        type: REMOVE_FROM_CART, 
        name: item.name,
        value: item.price
    });
    
    return (
        <div className="ItemDetails">
            <h3 className="ItemDetails-name">{item.name}</h3>
            <img className="ItemDetails-image" src={item.image_url}/>
            <h4 className="ItemDetails-price">${item.price}</h4>
            <span className="ItemDetails-count">{count}</span>
            {count > 0 && <button className="ItemDetails-button" onClick={removeFromCart}>Remove from Cart</button>}
            <button className="ItemDetails-button" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemDetails;