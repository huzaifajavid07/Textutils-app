import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="container d-flex justify-content-center my-2" style={{ height: "60px" }}>
  {props.alert && (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
      role="alert"
      style={{
        width: '100%',
        maxWidth: '400px',  // Responsive width
        padding: '10px'
      }}
    >
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )}
</div>

  );
}

export default Alert;
