import "./App.css";
import ProductCard from "./ProductCard";

export default function App() {
  const products = [
    {
      name: "Wireless Headphones",
      price: 129.99,
      inStock: true,
      image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Mechanical Keyboard",
      price: 89.99,
      inStock: false,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },
    {
      name: "Smart Watch",
      price: 199.99,
      inStock: true,
      image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="page">
      <h1>Product Catalog</h1>

      <div className="grid">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}