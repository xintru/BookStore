import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Products from './containers/Products/Products';
import { initStart } from './store/actions/actions';
import classes from './App.module.scss';
import Modal from './components/UI/Modal/Modal';
import Cart from './components/Cart/Cart';

// Основной контейнер, в котором хранится все приложение.

const App = props => {
  const [showCart, setShowCart] = useState(false);
  const {initStart} = props;

  useEffect(() => {
    initStart();
  }, [initStart])


  let cart = <Modal show={showCart} hide={() => setShowCart(false)} className={classes.Cart} cart={true}>
    <Cart orders={props.orders} sum={props.sum} />
  </Modal>
  
  return (
    <div>
      <header className={classes.Header}>
        <div className={classes.UIContainer}>
          <h1>SomeLogo</h1>
          <button className={classes.CartIcon} onClick={() => setShowCart(true)}><i className="fa fa-shopping-cart"></i> {props.orderCount}</button>
        </div>
      </header>
      {showCart && cart}
      <Products />
    </div>

  );
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
