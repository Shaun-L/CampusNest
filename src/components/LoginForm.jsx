import LOGO from '../assets/LOGO.png';
const LoginForm = () => {
  const onSubmit = () => {
    // set cookies
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 rounded-xl">
      <img src={LOGO} alt="lite" className="logo mx-auto h-64" />
      <form>
        <div className="flex flex-col">
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="email"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="password"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* *Make this look better* */}
        <div className="flex justify-center my-4">
            <button
              type="submit"
              className="rounded-full bg-violet-200 px-8 py-2 text-md font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
      </form>
    </div>
  );
};

export default LoginForm;
