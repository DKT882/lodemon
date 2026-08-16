import React from "react";
import { useState, useEffect } from "react";

const Blogs = () => {
  const domain = import.meta.env.VITE_DOMAIN_URI;
  const [blogsData, setBlogsData] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(`${domain}api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to download portfolio information");
        }
        const jsonResult = await response.json();
        setBlogsData(jsonResult);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (blogsData) {
      console.log("Portfolio data stored:", blogsData);
    }
  }, [blogsData]);

  return <div></div>;
};

export default Blogs;
