import React, {Component} from 'react';
import {connect} from 'react-redux';


import Spinner from '../../components/UI/Spinner/Spinner';
import ProductCard from '../../components/ProductCard/ProductCard';
import classes from './Products.module.scss'
import Modal from '../../components/UI/Modal/Modal';
import SelectedCard from '../SelectedCard/SelectedCard';

// Основной контейнер, в котором выводятся карточки из GET запроса, а также
// модальное окно.

class Products extends Component {

    state = {
        showSelectedCard: false,
        currentCard: {}
    }
    
    showSelectedCard = ( index ) => {
        this.setState({currentCard: this.props.data[index]})
        this.setState({showSelectedCard: true});
    }

    hideSelectedCard= () => {
        this.setState({showSelectedCard: false})
        this.setState({currentCard: {}})
    }

    render() {
        let products;
        if (this.props.data) {
            products = this.props.data.map((product, i) => <ProductCard img={product.image}
                                                                        key={product.isbn13}
                                                                        title={product.title}
                                                                        showModal={this.showSelectedCard}
                                                                        index={i} />);
        }

        if(this.props.loading) {
            products = <Spinner />
        }

        const selectedCard = <Modal show={this.state.showSelectedCard} hide={this.hideSelectedCard}>
                                <SelectedCard title={this.state.currentCard.title}
                                    img={this.state.currentCard.image}
                                    subtitle={this.state.currentCard.subtitle}
                                    price={this.state.currentCard.price}
                                    url={this.state.currentCard.url}
                                    hide={this.hideSelectedCard}
                                    />
                            </Modal>
        
        return(
            <div className={classes.ProductsContainer}>
                {this.state.showSelectedCard && selectedCard}
                {products}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        data: state.data
    }
}


export default connect(mapStateToProps)(Products);