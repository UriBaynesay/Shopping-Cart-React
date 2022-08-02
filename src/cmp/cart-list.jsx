import { CartPreview } from "./cart-preview";

export const CartList = ({ items }) => {
  return (
    <section className="cart-list-container">
      <ul className="cart-list">
        {items &&
          items.map((item) => {
            return (
              <li key={item.ProductId}>
                <CartPreview item={item} />
              </li>
            )
          })}
      </ul>
    </section>
  )
}
