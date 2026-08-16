import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../shared/Buttons";

const Products = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_DOMAIN_URI || "http://localhost:5000/";

    const [productsData, setProductsData] = useState(null);
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                if (id) {
                    // Fetch single product details
                    const response = await fetch(`${domain}api/products/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to download product details");
                    }
                    const jsonResult = await response.json();
                    setSingleProduct(jsonResult);
                } else {
                    // Fetch all products list
                    const response = await fetch(`${domain}api/products`);
                    if (!response.ok) {
                        throw new Error("Failed to download products data");
                    }
                    const jsonResult = await response.json();
                    setProductsData(jsonResult);
                }
            } catch (err) {
                console.log("error", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, domain]);

    if (loading) {
        return (
            <div style={{ padding: "50px", fontSize: "20px" }}>
                Loading product information, please wait...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: "50px", color: "red" }}>
                Error: {error}. Make sure the backend is running.
            </div>
        );
    }

    // --- Render Single Product Detail Page ---
    if (id) {
        if (!singleProduct) {
            return <div style={{ padding: "50px" }}>Product not found.</div>;
        }

        return (
            <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "left" }}>
                <Button onClick={() => navigate("/Products")} style={{ marginBottom: "20px" }}>
                    &larr; Back to Products
                </Button>

                <h1>{singleProduct.name}</h1>
                <p style={{ color: "#666", fontSize: "16px", margin: "5px 0" }}>
                    Brand: <strong>{singleProduct.brand}</strong> | Category: {singleProduct.category} ({singleProduct.subcategory})
                </p>

                {singleProduct.images && singleProduct.images.length > 0 && (
                    <div style={{ display: "flex", gap: "10px", margin: "20px 0", overflowX: "auto" }}>
                        {singleProduct.images.map((imgUrl, idx) => (
                            <img
                                key={idx}
                                src={imgUrl}
                                alt={`${singleProduct.name} ${idx + 1}`}
                                style={{ width: "200px", height: "240px", objectFit: "cover", borderRadius: "4px", border: "1px solid #ddd" }}
                            />
                        ))}
                    </div>
                )}

                <div style={{ margin: "20px 0" }}>
                    <span style={{ fontSize: "24px", fontWeight: "bold", color: "#b12704", marginRight: "15px" }}>
                        {singleProduct.currency} {singleProduct.price}
                    </span>
                    {singleProduct.compareAtPrice && (
                        <span style={{ textDecoration: "line-through", color: "#777", marginRight: "15px" }}>
                            {singleProduct.currency} {singleProduct.compareAtPrice}
                        </span>
                    )}
                    {singleProduct.discountPercentage > 0 && (
                        <span style={{ color: "green", fontWeight: "bold" }}>
                            ({singleProduct.discountPercentage}% OFF)
                        </span>
                    )}
                </div>

                <p style={{ fontSize: "15px", color: "#555", margin: "10px 0" }}>
                    Rating: <strong>{singleProduct.rating} / 5</strong> ({singleProduct.reviewCount} reviews)
                </p>

                <p style={{ fontWeight: "bold", color: singleProduct.stock > 0 ? "green" : "red" }}>
                    {singleProduct.stock > 0 ? `In Stock (${singleProduct.stock} available)` : "Out of Stock"}
                </p>

                <div style={{ marginTop: "20px" }}>
                    <h3>Description</h3>
                    <p style={{ lineHeight: "1.6" }}>{singleProduct.description}</p>
                </div>

                {singleProduct.features && singleProduct.features.length > 0 && (
                    <div style={{ marginTop: "20px" }}>
                        <h3>Key Features:</h3>
                        <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                            {singleProduct.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div style={{ marginTop: "20px" }}>
                    <p><strong>Available Colors:</strong> {singleProduct.colors ? singleProduct.colors.join(", ") : "N/A"}</p>
                    <p><strong>Available Sizes:</strong> {singleProduct.sizes ? singleProduct.sizes.join(", ") : "N/A"}</p>
                    <p><strong>SKU:</strong> {singleProduct.sku}</p>
                </div>

                {singleProduct.shipping && (
                    <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "4px" }}>
                        <p style={{ margin: "0" }}>
                            <strong>Shipping:</strong> {singleProduct.shipping.freeShipping ? "Free Shipping" : "Standard Shipping"} | Estimated Delivery: {singleProduct.shipping.estimatedDelivery}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    // --- Render Products List Page ---
    if (!productsData || !productsData.products || productsData.products.length === 0) {
        return <div style={{ padding: "50px" }}>No products found.</div>;
    }

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "left" }}>Product Catalog</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {productsData.products.map((product) => (
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
        </div>
    );
};

export default Products;
