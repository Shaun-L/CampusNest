
const LoginForm = () => {  
  const onSubmit = () => {
    // set cookies
  }

  return (
    <div className="mx-auto py-8 px-8 w-1/2 bg-indigo-100 rounded-xl">
      <form>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="flex flex-col">
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="username"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="password"
              className="block text-md font-bold leading-6 text-gray-900"
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
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;