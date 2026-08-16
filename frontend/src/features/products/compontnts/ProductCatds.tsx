import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/Buttons";

function ProductCatds({ products }) {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <div style={{ padding: "20px" }}>No products found.</div>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "left",
            boxSizing: "border-box"
          }}
        >
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
            />
          )}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>{product.name}</h2>
              <p style={{ color: "#777", fontSize: "13px", margin: "5px 0" }}>
                {product.brand} | {product.category}
              </p>
              <p style={{ margin: "5px 0", fontSize: "13px", lineHeight: "1.4" }}>{product.shortDescription}</p>
            </div>
            <div>
              <div style={{ margin: "10px 0" }}>
                <strong style={{ color: "#b12704" }}>{product.currency} {product.price}</strong>
              </div>
              <Button onClick={() => navigate(`/Products/${product.id}`)}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatds;
