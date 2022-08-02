export const CartPreview = ({ item }) => {
  return (
    <article className="cart-preview-container">
      <div className="img-container">
        <img src={item.ProductImage} alt="" />
      </div>
      <div className="item-details">
        <h4>{item.ProductTitle}</h4>
        <pre>{item.PriceLabel}</pre>
      </div>
    </article>
  )
}
