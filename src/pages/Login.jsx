
import LoginForm from "../components/LoginForm";
import logo3 from "../assets/LOGO3.png";
import "./Login.css";
 
const Login = () => {
  const loginTextStyle = {
    fontSize: '16px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '20px',
  };

  const registerLinkStyle = {
    color: '#0096FF',
    textDecoration: 'none',
  };
  return (
    <div style={{ textAlign: 'center' }}>

    <div className="formatting">

      <img className="login-logo" src = {logo3}></img>

      <LoginForm />
      <p style={loginTextStyle}>Don't have an account? <a href='/register' style={registerLinkStyle} className="hover:underline">Register</a></p>
      </div>

    </div>
    
  );
}

export default Login;