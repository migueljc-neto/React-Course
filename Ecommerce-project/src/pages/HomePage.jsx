import "./HomePage.css";
import { Header } from "../Components/Header";
import { ProductCard } from "../Components/ProductCard";
import { products } from "../../starting-code/data/products";

export function HomePage() {
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
