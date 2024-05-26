import LoginForm from "../components/LoginForm";
import logo3 from "../assets/LOGO3.png";
import "./Login.css";

const Login = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="formatting">
        <img className="login-logo" src={logo3}></img>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
