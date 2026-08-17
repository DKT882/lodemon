import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/Buttons";

function BlogCard({ blogs }) {
  const navigate = useNavigate();

  if (!blogs || blogs.length === 0) {
    return <div style={{ padding: "20px" }}>No blogs found.</div>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
      {blogs.map((blog) => (
        <div
          key={blog.id}
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
          {blog.featuredImage && (
            <img
              src={blog.featuredImage}
              alt={blog.title}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
            />
          )}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "12px", color: "purple", fontWeight: "bold", textTransform: "uppercase" }}>
                {blog.category}
              </span>
              <h2 style={{ margin: "5px 0 8px 0", fontSize: "18px" }}>{blog.title}</h2>
              <p style={{ margin: "5px 0 10px 0", fontSize: "13px", lineHeight: "1.4" }}>{blog.excerpt}</p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
                {blog.author && blog.author.avatar && (
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  />
                )}
                <div>
                  <p style={{ margin: "0", fontSize: "12px", fontWeight: "bold" }}>{blog.author?.name}</p>
                  <p style={{ margin: "0", fontSize: "10px", color: "#666" }}>{blog.author?.role}</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <span style={{ fontSize: "11px", color: "#888" }}>
                {blog.publishedAt} | {blog.readTime}
              </span>
              <Button onClick={() => navigate(`/Blogs/${blog.id}`)}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
