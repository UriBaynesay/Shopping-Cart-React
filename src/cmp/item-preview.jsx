export const ItemPreview = ({ item, onAddToCart }) => {
  return (
    <article className="item-preview-container">
      <div className="img-container">
        <img src={item.ProductImage} alt="" />
      </div>
      <h4>{item.ProductTitle}</h4>
      <pre>{item.PriceLabel}</pre>
      <button className="btn add-to-cart" onClick={()=>onAddToCart(item)}>Add to cart</button>
    </article>
  )
}
