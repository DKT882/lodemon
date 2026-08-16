import React from "react";

function Education({ data }) {
  if (!data || data.length === 0) {
    return <div>No education details listed.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Education</h2>
      <div style={{ marginTop: "15px" }}>
        {data.map((edu) => (
          <div key={edu.id} style={{ marginBottom: "15px" }}>
            <h3 style={{ margin: "0" }}>{edu.degree}</h3>
            <h4 style={{ margin: "5px 0", color: "#666" }}>
              {edu.institution}, {edu.location} ({edu.startYear} - {edu.endYear})
            </h4>
            <p style={{ margin: "5px 0" }}>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
