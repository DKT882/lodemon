import React from "react";

function Projects({ data }) {
  if (!data || data.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px", textAlign: "left" }}>
      <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", color: "#333" }}>Projects</h2>
      <div style={{ marginTop: "15px" }}>
        {data.map((project) => (
          <div key={project.id} style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
            <h3 style={{ margin: "0 0 10px 0" }}>
              {project.title} {project.featured && <span style={{ color: "orange", fontSize: "14px" }}>(Featured Project)</span>}
            </h3>
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "4px", marginBottom: "10px", display: "block" }} 
              />
            )}
            <p><strong>Category:</strong> {project.category}</p>
            <p style={{ margin: "5px 0" }}>{project.description}</p>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>{project.longDescription}</p>
            <p style={{ margin: "10px 0" }}>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <div style={{ marginTop: "10px" }}>
              <strong>Features:</strong>
              <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: "10px" }}>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "blue", marginRight: "15px", textDecoration: "underline" }}>
                GitHub Link
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                Live Demo Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
