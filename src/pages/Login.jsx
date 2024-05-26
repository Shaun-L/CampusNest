
import LoginForm from "../components/LoginForm";
const Login = () => {
  const loginTextStyle = {
    fontSize: '16px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '20px',
  };

  const registerLinkStyle = {
    color: '#fbbf24',
    textDecoration: 'none',
  };
  return (
    <div style={{ textAlign: 'center' }}>
    <LoginForm />
    <p style={loginTextStyle}>Don't have an account? <a href='/register' style={registerLinkStyle} className="hover:underline">Register</a></p>
    </div>
  );
}

export default Login;