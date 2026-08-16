import React from "react";

function About({ data }) {
  if (!data) {
    return <div>Loading about section...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>
        {data.title}
      </h2>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index} style={{ marginTop: "10px", lineHeight: "1.6" }}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default About;
