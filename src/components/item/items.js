import React, { useEffect, useState } from "react";

const Items = (props) => {
    const { increment, decrement, items, del } = props;

    let length = items.length;
    const ListItem = length ? (
        items.map((item) => {
            return (
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p className="quantity">
                        <span onClick={() => increment(item.id)} className="plus quantity-btn">
                            +
                        </span>
                        {item.quantity || 1}
                        <span onClick={() => decrement(item.id)} className="minus quantity-btn">
                            -
                        </span>
                    </p>
                    <p>{item.price}</p>
                    <p className="delete" onClick={() => del(item.id)}>
                        &times;
                    </p>
                </div>
            );
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    );
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>quantity</p>
                <p>Price</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    );
};

export default Items;
