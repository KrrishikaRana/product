export default function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-card">
      <div className="img-wrap">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p className="price">${price}</p>

      <span className={inStock ? "badge green" : "badge red"}>
        {inStock ? "Available" : "Out of Stock"}
      </span>
    </div>
  );
}