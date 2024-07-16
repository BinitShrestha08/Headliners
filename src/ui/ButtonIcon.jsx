const ButtonIcon = ({ children, onClick: logout }) => {
  return (
    <button
      className="relative flex items-center justify-center rounded-sm p-2 transition duration-200 ease-in-out hover:bg-gray-100"
      onClick={logout}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
