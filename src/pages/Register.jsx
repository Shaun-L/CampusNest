import CreateAccountForm from "../components/CreateAccountForm";

const Register = () => {
  return (
    <div>
      <CreateAccountForm />
      <p className="text-center w-full">
        Already have an account? <a href="/login" className="text-yellow-400">Log in</a>
      </p>
    </div>
  );
};

export default Register;
