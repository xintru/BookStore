import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './SelectedCard.module.scss'
import CartControls from '../../components/CartControls/CartControls';
import {addToCart} from '../../store/actions/actions'


// Модальное окно, отправка в корзину.

class selectedCard extends Component {
    state = {
        value: 1
    }
    
    addItem = () => {
        this.setState({value: this.state.value + 1})
    }

    removeItem = () => {
        if (this.state.value > 1) {
            this.setState({value: this.state.value - 1});
        }
    }

    pushToCart = () => {
        const order = {
            value: this.state.value,
            title: this.props.title,
            price: this.props.price
        }
        this.props.addToCart(order);
        this.props.hide();
    }

    render() {
        return (
            <article className={classes.Wrapper}>
                <section className={classes.BriefBookInfo}>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.img} alt="Book" />
                </section>
                <section className={classes.OtherInfo}>
                    <h3>{this.props.subtitle}</h3>
                    <p>
                        Some other info that could be provided for the book.
                    </p>
                    <p className={classes.Price}>Price: {this.props.price} $</p>
                    <section className={classes.CartControls}>
                        <CartControls value={this.state.value} addItem={this.addItem} removeItem={this.removeItem} addToCart={this.pushToCart} />
                    </section>
                </section>
            </article>
        );    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (order) => dispatch(addToCart(order))
    }
}

export default connect(null, mapDispatchToProps)(selectedCard);