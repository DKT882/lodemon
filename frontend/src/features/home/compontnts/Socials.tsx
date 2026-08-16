import React from "react";

function Socials({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h3 style={{ margin: "0 0 10px 0" }}>Connect with me:</h3>
      <ul style={{ listStyleType: "none", paddingLeft: "0", display: "flex", gap: "15px", margin: "0" }}>
        {data.github && (
          <li>
            <a href={data.github} target="_blank" rel="noreferrer" style={{ color: "#333", fontWeight: "bold", textDecoration: "underline" }}>
              GitHub
            </a>
          </li>
        )}
        {data.linkedin && (
          <li>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: "#0077b5", fontWeight: "bold", textDecoration: "underline" }}>
              LinkedIn
            </a>
          </li>
        )}
        {data.twitter && (
          <li>
            <a href={data.twitter} target="_blank" rel="noreferrer" style={{ color: "#1da1f2", fontWeight: "bold", textDecoration: "underline" }}>
              Twitter
            </a>
          </li>
        )}
        {data.instagram && (
          <li>
            <a href={data.instagram} target="_blank" rel="noreferrer" style={{ color: "#e1306c", fontWeight: "bold", textDecoration: "underline" }}>
              Instagram
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Socials;
