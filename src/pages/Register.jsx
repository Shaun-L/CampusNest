import CreateAccountForm from "../components/CreateAccountForm";

const Register = () => {
  return (
    <div>
      <CreateAccountForm />
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default Register;
