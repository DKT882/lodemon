import React from "react";

function Contact({ data }) {
  if (!data) {
    return <div>No contact details.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>{data.title}</h2>
      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>{data.description}</p>
      <div style={{ marginTop: "15px" }}>
        <p><strong>Email me at:</strong> {data.email}</p>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Status:</strong> {data.availability}</p>
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{data.cta}</p>
      </div>
    </div>
  );
}

export default Contact;
