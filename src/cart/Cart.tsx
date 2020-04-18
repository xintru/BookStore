import React, { FC } from 'react'
import Dialog from '../shared/UI/Dialog/Dialog'
import { Cart as CartType } from '../shared/Types/types'
import CartItem from './CartItem'
import classes from './Cart.module.scss'

interface Props {
  showCart: boolean
  toggleCartHandler: () => void
  cart: CartType[]
}

const Cart: FC<Props> = (props) => {
  const { showCart, toggleCartHandler, cart } = props
  return (
    <Dialog show={showCart} onClose={toggleCartHandler}>
      <div className={classes.cartContainer}>
        {cart.length ? (
          <>
            <ul>
              {cart.map((item) => (
                <div className={classes.cartItem} key={item.item.isbn13}>
                  <CartItem
                    quantity={item.quantity}
                    title={item.item.title}
                    price={item.item.price}
                  />
                </div>
              ))}
            </ul>
            <h3 className={classes.total}>
              Total:{' '}
              {cart
                .reduce((a, b) => a + +b.item.price * b.quantity, 0)
                .toFixed(2)}
              $
            </h3>
          </>
        ) : (
          <h3 className={`${classes.empty} centered`}>Cart is empty</h3>
        )}
      </div>
    </Dialog>
  )
}

export default Cart
