import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
    const domain = import.meta.env.VITE_DOMAIN_URI;
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`${domain}api/profile`);
                if (!response.ok) {
                    throw new Error("Failed to download portfolio information");
                }
                const jsonResult = await response.json();
                setPortfolioData(jsonResult);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchPortfolio();
    }, []);

    useEffect(() => {
        if (portfolioData) {
            console.log("Portfolio data stored:", portfolioData);
        }
    }, [portfolioData]);

    return <div></div>;
};

export default Home;
