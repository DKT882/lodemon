import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCatds from "./compontnts/ProductCatds";
import SinglePage from "./SinglePage";

const Products = () => {
    const { id } = useParams();
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
                    const response = await fetch(`${domain}api/products/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to download product details");
                    }
                    const jsonResult = await response.json();
                    setSingleProduct(jsonResult);
                } else {
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

    if (id) {
        return <SinglePage product={singleProduct} />;
    }

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "left" }}>Product Catalog</h1>
            <ProductCatds products={productsData ? productsData.products : []} />
        </div>
    );
};

export default Products;
