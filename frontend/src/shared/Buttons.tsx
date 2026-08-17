import React from "react";

function Button({ onClick, children, style }) {
  const defaultStyle = {
    padding: "8px 12px",
    backgroundColor: "#efefef",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333",
  };

  return (
    <button 
      onClick={onClick} 
      style={{ ...defaultStyle, ...style }}
    >
      {children}
    </button>
  );
}

export default Button;
