import React, {Component} from 'react';
import {connect} from 'react-redux';

import Products from './containers/Products/Products';
import {initStart} from './store/actions/actions';
import classes from  './App.module.css';
import Cart from './components/Cart/Cart';

// Основной контейнер, в котором хранится все приложение.

class App extends Component {
  state = {
    showCart: false
  }

  componentDidMount() {
    this.props.initStart();
  }

  onCartToggle = () => {
    this.setState({showCart: !this.state.showCart})
  }

  render() {
    let cart = null;
    if (this.state.showCart) {
      cart = <Cart orders={this.props.orders} sum={this.props.sum} />
    }

    return (
      <div>
        <header className={classes.Header}>
            <button className={classes.Cart} onClick={this.onCartToggle}><i className="fa fa-shopping-cart"></i> {this.props.orderCount}</button>
            <h1>SomeLogo</h1>
        </header>
        {cart}
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
