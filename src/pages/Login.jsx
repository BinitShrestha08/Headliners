import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Heading as="h2" className="text-center mb-6">
        Log in to your account
      </Heading>
      <LoginForm />
    </div>
  );
}

export default Login;
