import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="container d-flex justify-content-center my-2">
  {props.alert && (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show w-100 w-md-75 w-lg-50 text-center`}
      role="alert"
      style={{
        fontSize: '1rem',
        padding: '10px 20px',
        maxWidth: '400px'
      }}
    >
      <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
    </div>
  )}
</div>

  );
}

export default Alert;
