
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div>
    <LoginForm />
    <p>Don't have an account? <a href='/register'>Register</a></p>
    </div>
  );
}

export default Login;