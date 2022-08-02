import { useSelector } from "react-redux"

import { CartList } from "../cmp/cart-list"
import { Checkout } from "../cmp/checkout"

export const ShoppingCart = () => {
  const { cart } = useSelector((storeState) => storeState.cartModule)
  const total = cart.reduce((acc, item) => acc + item.Price, 0)
  return (
    <div className="shopping-cart-container">
      <CartList items={cart} />
      <Checkout total={total} />
    </div>
  )
}
