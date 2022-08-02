import { ItemPreview } from "./item-preview"

export const ItemsList = ({ items, onAddToCart }) => {
  return (
    <section className="items-list-container">
      <ul className="items-list card-grid">
        {items &&
          items.map((item) => {
            return (
              <li key={item.ProductId}>
                <ItemPreview item={item}/>
                <button
                  className="btn add-to-cart"
                  onClick={() => onAddToCart(item)}
                >
                  Add to cart
                </button>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
