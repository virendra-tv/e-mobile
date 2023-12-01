import "./home.css";
import Card from "../Card/Card.js";
import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header.js";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />

      <div>
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id}>
              <Card
                image={product.thumbnail}
                name={product.title}
                title={product.category}
                rating={product.rating.rate}
                id={product.id}
                className={"grid-item"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
