import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { itemsService } from "../services/items.service"
import { ItemsList } from "./items-list"
import { addToCart } from "../store/actions/cart.actions"

export const ItemsApp = () => {
  const [items, setItems] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    setItems(itemsService.query())
  }, [])

  const onAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <section className="items-app-container">
      <ItemsList items={items} onAddToCart={onAddToCart} />
    </section>
  )
}
