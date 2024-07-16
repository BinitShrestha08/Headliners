import React from "react";

const Form = ({ type = "regular", children, ...props }) => {
  return (
    <form
      className={`overflow-hidden text-sm ${
        type !== "modal"
          ? "p-6 bg-gray-50 border border-gray-200 rounded-md"
          : "w-[80rem]"
      }`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
