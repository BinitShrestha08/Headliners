import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="border border-gray-300 bg-gray-50 rounded-sm p-2 shadow-sm"
    />
  );
});

export default Input;
