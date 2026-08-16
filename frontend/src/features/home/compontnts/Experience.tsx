import React from "react";

function Experience({ data }) {
  if (!data || data.length === 0) {
    return <div>No work experience listed.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Work Experience</h2>
      <div style={{ marginTop: "15px" }}>
        {data.map((exp) => (
          <div key={exp.id} style={{ marginBottom: "20px", borderBottom: "1px dashed #eee", paddingBottom: "15px" }}>
            <h3 style={{ margin: "0" }}>{exp.role}</h3>
            <h4 style={{ margin: "5px 0", color: "#666" }}>
              {exp.company} - {exp.location} ({exp.startDate} to {exp.endDate})
            </h4>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{exp.description}</p>
            <div>
              <strong>Responsibilities:</strong>
              <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
