import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { ProductCard } from "../Components/ProductCard";

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
