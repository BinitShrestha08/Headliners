import Logout from "../features/authentication/Logout";

function Header() {
  return (
    <header className="bg-gray-50 p-5 border-b border-gray-200 flex gap-6 items-center justify-between">
      <h1>HeadLiner</h1>
      <Logout />
    </header>
  );
}

export default Header;
