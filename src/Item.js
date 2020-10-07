import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";
import "./Item.css";

function Item({item_name, price, image_url, cart, id, count}) {
    const dispatch = useDispatch();
    const addToCart = () => dispatch({ 
        type: ADD_TO_CART, 
        item: {name: item_name, image: image_url, price: price},
        value: price
    });
    const removeFromCart = () => dispatch({ 
        type: REMOVE_FROM_CART, 
        name: item_name,
        value: price
    });
    if (cart) {
        return (
            <div className="Item">
                <h3 className="Item-name">{item_name}</h3>
                <img className="Item-image" src={image_url}/>
                <h4 className="Item-price">${price}</h4>
                <span className="Item-count">{count}</span>
                <button className="Item-button" onClick={removeFromCart}>Remove from Cart</button>
            </div>
        )
    }
    return (
        <div className="Item">
            <h3 className="Item-name">{item_name}</h3>
            <img className="Item-image" src={image_url}/>
            <h4 className="Item-price">${price}</h4>
            <Link to={`/products/${id}`}>More Details</Link>
            <button className="Item-button" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Item;