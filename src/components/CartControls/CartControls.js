import React from 'react';

import classes from './CartControls.module.scss';

// Элементы управления для отправки в корзину.

const CartControls = props => {
    return (
        <div>
            <div className={classes.Controls}>
                <button onClick={props.removeItem} className={classes.MoreLess}>-</button>
                <input type="text"value={props.value} readOnly />
                <button onClick={props.addItem} className={classes.MoreLess}>+</button>
            </div>
            <div className={classes.AddToCart}>
                <button onClick={props.addToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default CartControls;