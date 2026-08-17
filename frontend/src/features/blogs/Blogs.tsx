import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "./compontnts/blogCard";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
    const { id } = useParams();
    const domain = import.meta.env.VITE_DOMAIN_URI || "http://localhost:5000/";

    const [blogsData, setBlogsData] = useState(null);
    const [singleBlog, setSingleBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                if (id) {
                    const response = await fetch(`${domain}api/blogs/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to download blog details");
                    }
                    const jsonResult = await response.json();
                    setSingleBlog(jsonResult);
                } else {
                    const response = await fetch(`${domain}api/blogs`);
                    if (!response.ok) {
                        throw new Error("Failed to download blogs data");
                    }
                    const jsonResult = await response.json();
                    setBlogsData(jsonResult);
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
                Loading blogs, please wait...
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
        return <SingleBlog blog={singleBlog} />;
    }

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "left" }}>Blogs</h1>
            <BlogCard blogs={blogsData ? blogsData.blogs : []} />
        </div>
    );
};

export default Blogs;
