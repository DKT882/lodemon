import React from "react";

function Personal({ data }) {
  if (!data) {
    return <div>Loading personal info...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img 
          src={data.avatar} 
          alt="Avatar" 
          style={{ width: "120px", height: "120px", borderRadius: "50%", border: "2px solid #333" }} 
        />
        <div>
          <h1 style={{ margin: "0 0 10px 0", fontSize: "28px" }}>{data.name}</h1>
          <h3 style={{ margin: "0", color: "#666" }}>{data.role}</h3>
          <p style={{ margin: "5px 0", fontStyle: "italic" }}>{data.headline}</p>
        </div>
      </div>
      
      <div style={{ marginTop: "15px" }}>
        <p><strong>About:</strong> {data.bio}</p>
        <p style={{ marginTop: "10px" }}><strong>Location:</strong> {data.location}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p style={{ color: "green", fontWeight: "bold" }}>{data.availability}</p>
        <p style={{ marginTop: "10px" }}>
          <a href={data.resume} target="_blank" rel="noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
            View Resume (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}

export default Personal;
