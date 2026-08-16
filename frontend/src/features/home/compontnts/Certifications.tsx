import React from "react";

function Certifications({ data }) {
  if (!data || data.length === 0) {
    return <div>No certifications listed.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Certifications</h2>
      <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
        {data.map((cert) => (
          <li key={cert.id} style={{ marginBottom: "10px" }}>
            <strong>{cert.title}</strong> by {cert.issuer} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
