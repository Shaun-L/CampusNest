const UserAccountForm = () => {
  const onSubmit = () => {
    // save to database
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 bg-indigo-100 rounded-xl">
      <form>
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
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

          <hr class="my-6 h-0.5 border-t-0 bg-black" />

          <h2 className="text-xl font-bold my-4">Personal Information</h2>

          {/* name */}

          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="name"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <legend className="text-md font-bold leading-6 text-gray-900  ">
            Gender
          </legend>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-x-3">
              <input
                id="female"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-everything"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Female
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="male"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Male
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="transgender"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-nothing"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Transgender
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="nonbinary"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-nothing"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Non-binary
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="other"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-nothing"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Other
              </label>
            </div>
          </div>

          {/* university */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="university"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              University
            </label>
            <div>
              <input
                type="text"
                name="university"
                id="university"
                autoComplete="university"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          {/* year */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="year"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              Year
            </label>
            <div>
              <select
                id="year"
                name="year"
                autoComplete="year-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th+</option>
              </select>
            </div>
          </div>

          {/* major */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="last-name"
              className="block text-md font-bold leading-6  text-gray-900"
            >
              Major
            </label>
            <div>
              <input
                type="text"
                name="major"
                id="major"
                autoComplete="major"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <hr class="my-6 h-0.5 border-t-0 bg-black" />

          <h2 className="text-xl font-bold my-4">Housing Preferences</h2>

          {/* distance preference */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="distance-pref"
              className="block text-md font-bold leading-6 text-gray-900 "
            >
              Maximum Distance from School (in miles)
            </label>
            <div>
              <input
                type="number"
                name="distance-pref"
                id="distance-pref"
                min="0"
                autoComplete="distance-pref"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          {/* price range */}
          <div className="sm:col-span-3 my-4 w-full">
            <label className="block text-md font-bold leading-6 text-gray-900 ">
              Rent Price Range
            </label>

            <div className="mt-2 flex">
              <div>
                <label
                  htmlFor="price-range"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  Min
                </label>
                <input
                  type="number"
                  name="price-range-min"
                  id="price-range-min"
                  min="0"
                  autoComplete="price-range-min"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="price-range"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  Max
                </label>
                <input
                  type="number"
                  name="price-range"
                  id="price-range"
                  min="0"
                  autoComplete="price-range-min"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* roommate preference */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="roommate-type"
              className="block text-md font-bold leading-6 text-gray-900 mt-2"
            >
              Roommate Preference
            </label>
            <div>
              <select
                id="roommate-type"
                name="roommate-type"
                autoComplete="roommate-type"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>No Roommate</option>
                <option>Prefer Female</option>
                <option>Prefer Male</option>
                <option>Open to Any</option>
              </select>
            </div>
          </div>

          <fieldset className="my-4">
            <legend className="text-md font-bold leading-6 text-gray-900">
              Tags
            </legend>
            <div className="mt-2 space-y-2">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="petfriendly"
                    name="petfriendly"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="petfriendly"
                    className="font-medium text-gray-900"
                  >
                    Owns Pet(s)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="all-female"
                    name="all-female"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="all-female" className="font-medium text-gray-900">
                    Prefer All-Female Household
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="lgbtq"
                    name="lgbtq"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="lgbtq" className="font-medium text-gray-900">
                    Prefer LGBTQ-Friendly
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2  text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserAccountForm;
