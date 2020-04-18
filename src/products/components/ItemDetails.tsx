import React, { FC, useState } from 'react'
import classes from './ItemDetails.module.scss'
import Button from '../../shared/UI/Button/Button'
import { Book } from '../../shared/Types/types'
import Loading from '../../shared/UI/Loading/Loading'

interface Props {
  item: Book
  addToCart: (arg0: Book, arg1: number) => void
  closeDetails: () => void
}

const ItemDetails: FC<Props> = (props) => {
  const [showImage, setShowImage] = useState<boolean>()
  const [quantity, setQuantity] = useState<number>(1)
  const { item, addToCart, closeDetails } = props

  const increaseQuantityHandler = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1)
    }
  }

  const addToCartHandler = () => {
    addToCart(item, quantity)
    closeDetails()
  }

  return (
    <div className={classes.dialogContainer}>
      <h2>{item.title}</h2>
      <hr />
      <img
        src={item.image}
        alt={item.title}
        className={!showImage ? classes.hiddenImage : ''}
        onLoad={() => {
          setShowImage(true)
        }}
      />
      {!showImage && (
        <div className={classes.imageFallback}>
          <Loading />
        </div>
      )}
      <hr />
      <h3>{item.price} $</h3>
      <p>{item.subtitle}</p>
      <div className={classes.controls}>
        <div className={classes.counter}>
          <Button onClick={decreaseQuantityHandler}>-</Button>
          <input readOnly value={quantity} />
          <Button onClick={increaseQuantityHandler}>+</Button>
        </div>
        <Button onClick={addToCartHandler}>Add To Cart</Button>
      </div>
      <hr />
      <Button href={item.url}>Official store</Button>
    </div>
  )
}

export default ItemDetails
