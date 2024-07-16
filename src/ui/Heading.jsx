const Heading = ({ as: Component = "h1", children, ...rest }) => {
  let className = "text-3xl font-semibold"; // Default styles for h1

  switch (Component) {
    case "h1":
      className = "text-3xl font-semibold";
      break;
    case "h2":
      className = "text-2xl font-semibold";
      break;
    case "h3":
      className = "text-2xl font-medium";
      break;
    case "h4":
      className = "text-3xl font-semibold text-center";
      break;
    default:
      className = "text-3xl font-semibold";
      break;
  }

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Heading;
