import React, { FC, useState } from 'react'
import Header from './shared/Layout/Header/Header'
import Footer from './shared/Layout/Footer/Footer'
import Layout from './shared/Layout/Layout/Layout'
import ItemList from './products/ItemList'
import { Book, Cart as CartType } from './shared/Types/types'
import Cart from './cart/Cart'

const App: FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cart, setCart] = useState<CartType[] | []>([])

  const toggleCartHandler = () => {
    setShowCart((prevCart) => !prevCart)
  }

  const addToCartHandler = (item: Book, quantity: number): void => {
    const copiedCart = [...cart]
    const existingItem = copiedCart.find((i) => i.item.isbn13 === item.isbn13)
    if (!existingItem) {
      setCart((prevCart) => [...prevCart, { item, quantity: quantity }])
    } else {
      existingItem.quantity += quantity
      setCart(copiedCart)
    }
  }

  return (
    <>
      <Header cartCounter={cart.length || 0} toggleCart={toggleCartHandler} />
      <Layout>
        <ItemList addToCart={addToCartHandler} />
        <Cart
          showCart={showCart}
          toggleCartHandler={toggleCartHandler}
          cart={cart}
        />
      </Layout>
      <Footer />
    </>
  )
}

export default App
