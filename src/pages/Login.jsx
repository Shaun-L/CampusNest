
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div>
    <LoginForm />
    <p className="text-center my-4">Don't have an account? <a href='/register' className="text-violet-500 font-bold">Register</a></p>
    </div>
  );
}

export default Login;