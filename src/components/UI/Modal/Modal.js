import React, { Component } from 'react';

import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

// Модальное окно

class Modal extends Component {

    render () {

        const modalClasses = [classes.Modal];
        if (this.props.cart) {
            modalClasses.push(classes.Cart)
        }

        return ( 
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.hide} />
                <div
                    className={modalClasses.join(' ')}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;