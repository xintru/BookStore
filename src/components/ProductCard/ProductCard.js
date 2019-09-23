import React from 'react';

import classes from './ProductCard.module.scss'

// Карточки из GET запроса

const productCard = props => {
    return (
        <section className={classes.Card} onClick={() => props.showModal(props.index)}>
            <h3>{props.title}</h3>
            <img src={props.img} alt="Product"/>
        </section>
    )
}

export default productCard;