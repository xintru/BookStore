import React, { FC } from 'react'
import classes from './CartItem.module.scss'

interface Props {
  title: string
  quantity: number
  price: string
}

const CartItem: FC<Props> = (props) => {
  const { title, quantity, price } = props
  return (
    <li className={classes.cartItem}>
      <h3 className={classes.title}>{title}</h3>
      <p>{`${quantity} x ${price} = ${(quantity * +price).toFixed(2)}$`}</p>
    </li>
  )
}

export default CartItem
