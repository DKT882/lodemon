import React from "react";

function Services({ data }) {
  if (!data || data.length === 0) {
    return <div>No services details.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Services I Offer</h2>
      <div style={{ marginTop: "15px" }}>
        {data.map((service) => (
          <div key={service.id} style={{ marginBottom: "15px", borderBottom: "1px dashed #eee", paddingBottom: "10px" }}>
            <h3 style={{ margin: "0 0 5px 0", color: "#555" }}>
              {service.title} <span style={{ fontSize: "14px", color: "#888" }}>({service.icon})</span>
            </h3>
            <p style={{ margin: "0", color: "#666" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
