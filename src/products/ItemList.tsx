import React, { FC, useEffect, useState } from 'react'
import classes from './ItemList.module.scss'
import ShopItem from './components/ShopItem'
import Dialog from '../shared/UI/Dialog/Dialog'
import ItemDetails from './components/ItemDetails'
import { Book } from '../shared/Types/types'

interface Props {
  addToCart: (arg0: Book, arg1: number) => void
}

const ItemList: FC<Props> = (props) => {
  const [itemsList, setItemsList] = useState<Book[] | []>([])
  const [error, setError] = useState<string>('')
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [detailsItem, setDetailsItem] = useState<Book>({
    image: '',
    isbn13: '',
    price: '',
    subtitle: '',
    title: '',
    url: '',
  })
  const { addToCart } = props

  useEffect(() => {
    ;(async () => {
      setError('')
      try {
        const response = await fetch(
          'https://bookstore-27221.firebaseio.com/pack.json'
        )
        if (!response.ok) {
          throw new Error('Whoops...something went wrong.')
        }
        const { books } = await response.json()
        setItemsList(books)
      } catch (error) {
        setError(error.message)
      }
    })()
    return () => {
      setError('')
    }
  }, [])

  const renderMessage = (message: string) => (
    <h3 className="centered">Sorry, it seems something went wrong.</h3>
  )

  const toggleDetailsHandler = (isbn?: Book['isbn13']) => {
    setShowDetails((prevState) => !prevState)
    const item = itemsList.find((item) => item.isbn13 === isbn)
    if (item) setDetailsItem(item)
  }

  return (
    <div className={classes.listContainer}>
      <h2>Programming books</h2>
      {error && renderMessage('Sorry, it seems something went wrong.')}
      {!!itemsList.length &&
        !!error &&
        renderMessage('Sorry, it seems that we are out of stock.')}
      {!!itemsList.length && (
        <div className={classes.list}>
          {(itemsList as Book[]).map((book: Book) => (
            <ShopItem
              key={book.isbn13}
              title={book.title}
              img={book.image}
              isbn={book.isbn13}
              openDetails={toggleDetailsHandler}
            />
          ))}
        </div>
      )}
      <Dialog show={showDetails} onClose={toggleDetailsHandler}>
        <ItemDetails
          item={detailsItem}
          addToCart={addToCart}
          closeDetails={toggleDetailsHandler}
        />
      </Dialog>
    </div>
  )
}

export default ItemList
