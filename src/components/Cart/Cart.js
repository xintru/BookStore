import React from 'react';

import classes from './Cart.module.css';

// Этот компонент - корзина. Если общая сумма покупок равна нулю, то выводится сообщение, что корзина пуста.
// Переход к расчету - только кнопка. Можно конечно реализовать POST в какую-нибудь базу данных.

const Cart = props => {
    let cartUI;

    if (props.sum === 0) {
        cartUI = <p className={classes.Empty}>Sorry!<br/>The cart is empty!</p>
    } else {
        cartUI = <React.Fragment>
                    <p className={classes.FinalPrice}>Total price: {(props.sum).toFixed(2)} $</p>
                    <button>Proceed to checkout</button>
                </React.Fragment>
    };
    const content = props.orders.map(order => {
        return (
            <div>
                <li>{order.title}: {order.price * order.value} $</li>
            </div>
        )     
    });

    return (
        <div className={classes.Cart}>
            <ol>
                {content}
            </ol>
            {cartUI}
            
        </div>
    );
};

export default Cart;