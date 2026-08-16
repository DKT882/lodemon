import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Buttons";

function SinglePage({ product }) {
  const navigate = useNavigate();

  if (!product) {
    return <div style={{ padding: "50px" }}>Product details not found.</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "left" }}>
      <Button onClick={() => navigate("/Products")} style={{ marginBottom: "20px" }}>
        &larr; Back to Products
      </Button>

      <h1>{product.name}</h1>
      <p style={{ color: "#666", fontSize: "16px", margin: "5px 0" }}>
        Brand: <strong>{product.brand}</strong> | Category: {product.category} ({product.subcategory})
      </p>

      {product.images && product.images.length > 0 && (
        <div style={{ display: "flex", gap: "10px", margin: "20px 0", overflowX: "auto" }}>
          {product.images.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`${product.name} ${idx + 1}`}
              style={{ width: "200px", height: "240px", objectFit: "cover", borderRadius: "4px", border: "1px solid #ddd" }}
            />
          ))}
        </div>
      )}

      <div style={{ margin: "20px 0" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#b12704", marginRight: "15px" }}>
          {product.currency} {product.price}
        </span>
        {product.compareAtPrice && (
          <span style={{ textDecoration: "line-through", color: "#777", marginRight: "15px" }}>
            {product.currency} {product.compareAtPrice}
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span style={{ color: "green", fontWeight: "bold" }}>
            ({product.discountPercentage}% OFF)
          </span>
        )}
      </div>

      <p style={{ fontSize: "15px", color: "#555", margin: "10px 0" }}>
        Rating: <strong>{product.rating} / 5</strong> ({product.reviewCount} reviews)
      </p>

      <p style={{ fontWeight: "bold", color: product.stock > 0 ? "green" : "red" }}>
        {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3>Description</h3>
        <p style={{ lineHeight: "1.6" }}>{product.description}</p>
      </div>

      {product.features && product.features.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Key Features:</h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <p><strong>Available Colors:</strong> {product.colors ? product.colors.join(", ") : "N/A"}</p>
        <p><strong>Available Sizes:</strong> {product.sizes ? product.sizes.join(", ") : "N/A"}</p>
        <p><strong>SKU:</strong> {product.sku}</p>
      </div>

      {product.shipping && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "4px" }}>
          <p style={{ margin: "0" }}>
            <strong>Shipping:</strong> {product.shipping.freeShipping ? "Free Shipping" : "Standard Shipping"} | Estimated Delivery: {product.shipping.estimatedDelivery}
          </p>
        </div>
      )}
    </div>
  );
}

export default SinglePage;
