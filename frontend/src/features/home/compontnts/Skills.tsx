import React from "react";

function Skills({ data }) {
  if (!data || data.length === 0) {
    return <div>No skills details.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Skills</h2>
      <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
        {data.map((skill, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <strong>{skill.name}</strong> - Category: {skill.category} (Level: {skill.level}%)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
