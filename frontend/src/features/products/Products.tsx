import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) {
          throw new Error("Failed to download portfolio information");
        }
        const jsonResult = await response.json();
        setProductsData(jsonResult);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (productsData) {
      console.log("Portfolio data stored:", productsData);
    }
  }, [productsData]);

  return <div></div>;
};

export default Products;
