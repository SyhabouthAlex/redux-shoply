import React from 'react';
import Item from "./Item";
import { useSelector } from 'react-redux';

function ItemsPage() {
    const itemsObj = useSelector(state => state.products)
    const items = [];
    for (let item in itemsObj) {
        items.push({
            id: item,
            name: itemsObj[item].name,
            price: itemsObj[item].price,
            description: itemsObj[item].description,
            image_url: itemsObj[item].image_url
        })
    }
    return (
        <div className="ItemsPage">
            {items.map(item => 
                <Item 
                    key={item.id}
                    id={item.id}
                    item_name={item.name}
                    price={item.price}
                    description={item.description}
                    image_url={item.image_url}
                    cart={false}
                />
            )}
        </div>
    )
}

export default ItemsPage;