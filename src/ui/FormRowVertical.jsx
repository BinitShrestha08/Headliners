import React from "react";

function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2 p-3">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
