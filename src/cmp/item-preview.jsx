export const ItemPreview = ({ item }) => {
  return (
    <article className="item-preview-container">
      <div className="img-container">
        <img src={item.ProductImage} alt="" />
      </div>
      <h4>{item.ProductTitle}</h4>
      <pre>{item.PriceLabel}</pre>
    </article>
  )
}
