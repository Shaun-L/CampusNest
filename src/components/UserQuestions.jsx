const UserQuestions = () => {
  const onSubmit = () => {
    // save to database
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 bg-indigo-100 rounded">
      <form>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <div className="mt-6 flex flex-col">
          {/* name */}
          <div className="sm:col-span-3 my-2 w-full">
            <div>
              <label
                htmlFor="first-name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            {/* university */}
            <div className="sm:col-span-3 my-2 w-full">
              <label
                htmlFor="university"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                University
              </label>
              <div className="mt-2">
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
            <div className="sm:col-span-3 my-2 w-full">
              <label
                htmlFor="year"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Year
              </label>
              <div className="mt-2">
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
            <div className="sm:col-span-3 my-2 w-full">
              <label
                htmlFor="last-name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Major
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="major"
                  id="major"
                  autoComplete="major"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>
            {/* distance preference */}
            <div className="sm:col-span-3 my-2 w-full">
              <label
                htmlFor="distance-pref"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Distance Preference from School (in miles)
              </label>
              <div className="mt-2">
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
            <div className="sm:col-span-3 my-2 w-full">
              <label className="block text-md font-medium leading-6 text-gray-900">
                Price Range
              </label>

              <div className="mt-2 flex">
                <div>
                  <label
                    htmlFor="price-range"
                    className="block text-md font-medium leading-6 text-gray-900"
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
                    className="block text-md font-medium leading-6 text-gray-900"
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
            <div className="sm:col-span-3 my-2 w-full">
              <label
                htmlFor="roommate-type"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Roommate Preference
              </label>
              <div className="mt-2">
                <select
                  id="roommate-type"
                  name="roommate-type"
                  autoComplete="roommate-type"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>No Roommate</option>
                  <option>Same Gender</option>
                  <option>Open to Any</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 mt-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserQuestions;
