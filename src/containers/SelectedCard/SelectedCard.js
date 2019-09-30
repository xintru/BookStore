import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './SelectedCard.module.scss'
import CartControls from '../../components/CartControls/CartControls';
import { addToCart } from '../../store/actions/actions'


// Модальное окно, отправка в корзину.

const SelectedCard = props => {
    const [value, setValue] = useState(1);


    const pushToCart = () => {
        const order = {
            value: value,
            title: props.title,
            price: props.price
        }
        props.addToCart(order);
        props.hide();
    }


    return (
        <article className={classes.Wrapper}>
            <section className={classes.BriefBookInfo}>
                <h2>{props.title}</h2>
                <img src={props.img} alt="Book" />
            </section>
            <section className={classes.OtherInfo}>
                <h3>{props.subtitle}</h3>
                <p>
                    Some other info that could be provided for the book.
                    </p>
                <p className={classes.Price}>Price: {props.price} $</p>
                <section className={classes.CartControls}>
                    <CartControls
                        value={value}
                        addItem={() => setValue(value + 1)}
                        removeItem={() => value > 1 ? setValue(value - 1) : null}
                        addToCart={pushToCart} />
                </section>
            </section>
        </article>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: (order) => dispatch(addToCart(order))
    }
}

export default connect(null, mapDispatchToProps)(SelectedCard);