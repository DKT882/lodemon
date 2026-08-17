import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Buttons";

function SingleBlog({ blog }) {
    const navigate = useNavigate();

    if (!blog) {
        return <div style={{ padding: "50px" }}>Blog details not found.</div>;
    }

    // Helper to render different block types
    const renderContentBlock = (block, idx) => {
        switch (block.type) {
            case "paragraph":
                return (
                    <p key={idx} style={{ margin: "15px 0", lineHeight: "1.6", fontSize: "16px" }}>
                        {block.text}
                    </p>
                );
            case "heading":
                const HeadingTag = block.level === 2 ? "h2" : "h3";
                const headingStyle = block.level === 2
                    ? { marginTop: "30px", marginBottom: "15px", fontSize: "24px", borderBottom: "1px solid #eee", paddingBottom: "5px" }
                    : { marginTop: "25px", marginBottom: "12px", fontSize: "20px" };

                return (
                    <HeadingTag key={idx} style={headingStyle}>
                        {block.text}
                    </HeadingTag>
                );
            case "quote":
                return (
                    <blockquote
                        key={idx}
                        style={{
                            borderLeft: "4px solid purple",
                            paddingLeft: "15px",
                            margin: "20px 0",
                            fontStyle: "italic",
                            color: "#555",
                            fontSize: "17px"
                        }}
                    >
                        "{block.text}"
                    </blockquote>
                );
            case "list":
                return (
                    <ul key={idx} style={{ paddingLeft: "25px", margin: "15px 0", lineHeight: "1.6" }}>
                        {block.items.map((item, i) => (
                            <li key={i} style={{ marginBottom: "5px" }}>{item}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "left" }}>
            <Button onClick={() => navigate("/Blogs")} style={{ marginBottom: "20px" }}>
                &larr; Back to Blogs
            </Button>

            <h1 style={{ fontSize: "25px", color: "purple", fontWeight: "bold", textTransform: "uppercase" }}>
                {blog.category}
            </h1>
            <h1 style={{ marginTop: "10px", marginBottom: "15px", fontSize: "32px", lineHeight: "1.2" }}>{blog.title}</h1>

            <div style={{ display: "flex", alignItems: "center", gap: "15px", margin: "20px 0", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                {blog.author && blog.author.avatar && (
                    <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                    />
                )}
                <div>
                    <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>{blog.author?.name}</p>
                    <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>{blog.author?.role}</p>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "12px", color: "#777", textAlign: "right" }}>
                    <p style={{ margin: "0" }}>Published: {blog.publishedAt}</p>
                    <p style={{ margin: "0" }}>{blog.readTime}</p>
                </div>
            </div>

            {blog.featuredImage && (
                <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover", borderRadius: "6px", marginBottom: "20px" }}
                />
            )}

            <div style={{ margin: "25px 0" }}>
                {blog.content && blog.content.map((block, idx) => renderContentBlock(block, idx))}
            </div>

            {blog.tags && blog.tags.length > 0 && (
                <div style={{ marginTop: "30px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
                    <strong>Tags:</strong>{" "}
                    {blog.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            style={{
                                display: "inline-block",
                                backgroundColor: "#f0f0f0",
                                padding: "3px 8px",
                                borderRadius: "4px",
                                marginRight: "8px",
                                fontSize: "12px",
                                color: "#555"
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SingleBlog;
