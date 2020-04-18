import React, { FC, ReactNode } from 'react'
import classes from './ShopItem.module.scss'

interface ShopItem {
  title: string
  img: string
  isbn: string
  openDetails: (arg: string) => void
  children?: ReactNode
}

const ShopItem: FC<ShopItem> = (props) => {
  return (
    <div className={classes.card} onClick={() => props.openDetails(props.isbn)}>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title} />
    </div>
  )
}

export default ShopItem
