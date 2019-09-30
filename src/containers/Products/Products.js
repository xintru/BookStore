import React, { useState } from 'react';
import { connect } from 'react-redux';


import Spinner from '../../components/UI/Spinner/Spinner';
import ProductCard from '../../components/ProductCard/ProductCard';
import classes from './Products.module.scss'
import Modal from '../../components/UI/Modal/Modal';
import SelectedCard from '../SelectedCard/SelectedCard';

// Основной контейнер, в котором выводятся карточки из GET запроса, а также
// модальное окно.

const Products = props => {
    const [currentCard, setCurrentCard] = useState({});
    const [showCard, setShowCard] = useState(false);

    let products = <Spinner />;
    if (props.data && !props.loading) {
        products = props.data.map((product, i) => <ProductCard
            img={product.image}
            key={product.isbn13}
            title={product.title}
            showModal={() => {
                setCurrentCard(props.data[i]);
                setShowCard(true);
            }}
            index={i} />);
    }

    const selectedCard = <Modal show={showCard} hide={() => {
        setCurrentCard({});
        setShowCard(false);
    }}>
        <SelectedCard title={currentCard.title}
            img={currentCard.image}
            subtitle={currentCard.subtitle}
            price={currentCard.price}
            url={currentCard.url}
            hide={() => {
                setCurrentCard({});
                setShowCard(false);
            }}
        />
    </Modal >

    return (
        <div className={classes.ProductsContainer}>
            {showCard && selectedCard}
            {products}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        data: state.data
    }
}


export default connect(mapStateToProps)(Products);