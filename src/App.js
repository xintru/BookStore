import React, {Component} from 'react';
import {connect} from 'react-redux';

import Products from './containers/Products/Products';
import {initStart} from './store/actions/actions';
import classes from  './App.module.scss';
import Modal from './components/UI/Modal/Modal';
import Cart from './components/Cart/Cart';

// Основной контейнер, в котором хранится все приложение.

class App extends Component {
  state = {
    showCart: false
  }

  componentDidMount() {
    this.props.initStart();
  }

  onCartShow = () => {
    this.setState({showCart: true})
  }

  onCartHide = () => {
    this.setState({showCart: false})
  }

  render() {
    let cart = <Modal show={this.state.showCart} hide={this.onCartHide} className={classes.Cart} cart={true}>
                  <Cart orders={this.props.orders} sum={this.props.sum} />
              </Modal>
    return (
      <div>
        <header className={classes.Header}>
            <button className={classes.CartIcon} onClick={this.onCartShow}><i className="fa fa-shopping-cart"></i> {this.props.orderCount}</button>
            <h1>SomeLogo</h1>
        </header>
        {this.state.showCart && cart}
        <Products />
      </div>
      
    );
  };
};

const mapStateToProps = state => {
  return {
    orderCount: state.order.length,
    orders: state.order,
    sum: state.sum
  };
};

const mapDispatchToProps = dispatch => {
  return {
      initStart: () => dispatch(initStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
