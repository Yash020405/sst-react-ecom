import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";

function Products() {
  const initialProducts = [
    {
      id: 1,
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000",
      category: "Electronics"
    },
    {
      id: 2,
      title: "Apple iPhone 13",
      price: "Rs. 70,000",
      category: "Electronics"
    },
    {
      id: 3,
      title: "Google Pixel 7",
      price: "Rs. 50,000",
      category: "Electronics"
    },
    {
      id: 4,
      title: "Nokia 1100",
      price: "Rs. 2,000",
      category: "Electronics"
    },
    {
      id: 5,
      title: "Levi's Jeans",
      price: "Rs. 2,500",
      category: "Clothing"
    },
    {
      id: 6,
      title: "Adidas Shoes",
      price: "Rs. 5,000",
      category: "Footwear"
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Clothing", "Footwear"]; // Update with your actual categories

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <Effect />
      </div>
      <div>
        <h2>Categories</h2>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              fontWeight: selectedCategory === category ? "bold" : "normal"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Products);
