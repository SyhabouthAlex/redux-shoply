import React from 'react';
import Item from "./Item";
import { useSelector } from 'react-redux';

function Cart() {
    const total = useSelector(state => state.cartValue);
    const itemsObj = useSelector(state => state.cart);
    const items = [];
    for (let item in itemsObj) {
        items.push({
            id: item,
            name: item,
            price: itemsObj[item].price,
            image: itemsObj[item].image,
            count: itemsObj[item].count
        })
    }
    return (
        <div className="Cart">
            <h2 className="Cart-total">Total: ${total}</h2>
            {items.map(item => 
                <Item 
                    key={item.id}
                    id={item.id}
                    item_name={item.name}
                    price={item.price}
                    image_url={item.image}
                    count={item.count}
                    cart={true}
                />
            )}
        </div>
    )
}

export default Cart;