import React, { FC } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { FaDragon } from 'react-icons/fa'
import classes from './Header.module.scss'

interface Props {
  cartCounter: number
  toggleCart: () => void
}

const Header: FC<Props> = (props) => {
  const { cartCounter, toggleCart } = props
  return (
    <header className={classes.header}>
      <div className={classes.uiContainer}>
        <h1>
          Orion
          <FaDragon />
        </h1>
        <div className={classes.cartIcon} onClick={toggleCart}>
          {!!cartCounter && (
            <div className={`${classes.hasItems} ${classes.hasManyItems}`}>
              {cartCounter}
            </div>
          )}
          <MdShoppingCart />
        </div>
      </div>
    </header>
  )
}

export default Header
