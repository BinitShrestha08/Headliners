import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // Redirect to login if there is no authenticated user
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Show spinner while loading
  if (isLoading) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // Render the app if there is a user
  if (isAuthenticated) {
    return children;
  }

  // Handle other cases (optional)
  return null;
}

export default ProtectedRoute;
