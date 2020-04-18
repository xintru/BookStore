export interface Book {
  image: string
  isbn13: string
  price: string
  subtitle: string
  title: string
  url: string
}

export interface Cart {
  item: Book
  quantity: number
}
