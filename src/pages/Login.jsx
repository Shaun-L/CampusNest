
import LoginForm from "../components/LoginForm";
const Login = () => {
  const loginTextStyle = {
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
    marginTop: '20px',
  };

  const registerLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };
  return (
    <div style={{ textAlign: 'center' }}>
    <LoginForm />
    <p style={loginTextStyle}>Don't have an account? <a href='/register' style={registerLinkStyle}>Register</a></p>
    </div>
  );
}

export default Login;