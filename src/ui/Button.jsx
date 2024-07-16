const Button = ({
  size = "medium",
  variation = "primary",
  children,
  ...props
}) => {
  const baseClasses = "border-none rounded-sm shadow-sm";

  const sizeClasses = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium",
  };

  const variationClasses = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary:
      "text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variationClasses[variation]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
