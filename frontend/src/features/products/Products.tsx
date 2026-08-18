import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
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
    const [searchText, setSearchText] = useState("");
    const [appliedSearch, setAppliedSearch] = useState("");
    const searchDebounceTimeout = useRef(null);

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

    useEffect(() => {
        return () => {
            if (searchDebounceTimeout.current) {
                clearTimeout(searchDebounceTimeout.current);
            }
        };
    }, []);

    const handleSearchClick = () => {
        if (searchDebounceTimeout.current) {
            clearTimeout(searchDebounceTimeout.current);
        }

        searchDebounceTimeout.current = setTimeout(() => {
            setAppliedSearch(searchText.trim());
        }, 400);
    };

    const filteredProducts = useMemo(() => {
        const allProducts = productsData ? productsData.products : [];
        const query = appliedSearch.toLowerCase();

        if (!query) {
            return allProducts;
        }

        return allProducts.filter((product) => {
            const searchableText = [
                product.name,
                product.brand,
                product.category,
                product.shortDescription,
                product.description,
                product.tags ? product.tags.join(" ") : "",
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(query);
        });
    }, [productsData, appliedSearch]);

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

            <div style={{ display: "flex", gap: "10px", margin: "20px 0", alignItems: "center" }}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search products..."
                    style={{
                        flex: 1,
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                />
                <button
                    type="button"
                    onClick={handleSearchClick}
                    style={{
                        padding: "10px 16px",
                        borderRadius: "6px",
                        border: "1px solid #333",
                        backgroundColor: "#111",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "14px",
                    }}
                >
                    Search
                </button>
            </div>

            <ProductCatds products={filteredProducts} />
        </div>
    );
};

export default Products;
