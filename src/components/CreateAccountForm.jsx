import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { setUserProperties } from 'firebase/analytics';
import { useNavigate } from 'react-router-dom';



const UserAccountForm = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[name, setName] = useState('');
  const[gender, setGender] = useState('');
  const[university, setUniversity] = useState('');
  const[year, setYear] = useState('1st');
  const[major, setMajor] = useState('');
  const[distance, setDistance] = useState('');
  const[minPrice, setMinPrice] = useState('');
  const[maxPrice, setMaxPrice] = useState('');
  const[roomatePref, setRoomatePref] = useState('No Roomate');
  const[pets, setPets] = useState(false);
  const[femaleHousehold, setFemaleHousehold] = useState(false);
  const[lgbtqFriendly, setLgbtqFriendly] = useState(false);
  const[error, setError] = useState(false);
  const navigate = useNavigate();


  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleRoomatePreference = (e) => {
    setRoomatePref(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!gender) {
      setError('Please select a gender.');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username,
        password,
        name,
        gender,
        university,
        year,
        major,
        distance,
        minPrice,
        maxPrice,
        roomatePref,
        pets,
        femaleHousehold,
        lgbtqFriendly
      });
      console.log("Document written with ID: ", docRef.id);
      navigate('/login')

    } catch (e) {
      console.error("Error adding document: ", e)
    }
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 bg-indigo-100 rounded-xl">
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <hr class="my-6 h-0.5 border-t-0 bg-black" />

          <h2 className="text-xl font-semibold my-4">Personal Information</h2>

          {/* name */}

          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="name"
              className="block text-md font-semibold leading-6 text-gray-900"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <legend className="text-md font-semibold leading-6 text-gray-900  ">
            Gender
          </legend>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-x-3">
              <input
                id="female"
                name="gender"
                type="radio"
                value="Female"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleGenderChange}
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
                value="Male"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleGenderChange}
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
                value="Transgender"
                onChange={handleGenderChange}
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
                value="Non-binary"
                onChange={handleGenderChange}
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
                value="Other"
                onChange={handleGenderChange}
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
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              University
            </label>
            <div>
              <input
                type="text"
                name="university"
                id="university"
                autoComplete="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          {/* year */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="year"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Year
            </label>
            <div>
              <select
                id="year"
                name="year"
                autoComplete="year-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={year}
                onChange={handleYearChange}
                required
              >
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th+">5th+</option>
              </select>
            </div>
          </div>

          {/* major */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="last-name"
              className="block text-md font-semibold leading-6  text-gray-900"
            >
              Major
            </label>
            <div>
              <input
                type="text"
                name="major"
                id="major"
                autoComplete="major"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <hr class="my-6 h-0.5 border-t-0 bg-black" />

          <h2 className="text-xl font-semibold my-4">Housing Preferences</h2>

          {/* distance preference */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="distance-pref"
              className="block text-md font-semibold leading-6 text-gray-900 "
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
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                required
              />
            </div>
          </div>
          {/* price range */}
          <div className="sm:col-span-3 my-4 w-full">
            <label className="block text-md font-semibold leading-6 text-gray-900 ">
              Rent Price Range
            </label>

            <div className="mt-2 flex">
              <div>
                <label
                  htmlFor="price-range"
                  className="block text-md font-semibold leading-6 text-gray-900"
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
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price-range"
                  className="block text-md font-semibold leading-6 text-gray-900"
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
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          {/* roommate preference */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="roommate-type"
              className="block text-md font-semibold leading-6 text-gray-900 mt-2"
            >
              Roommate Preference
            </label>
            <div>
              <select
                id="roommate-type"
                name="roommate-type"
                autoComplete="roommate-type"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={roomatePref}
                onChange={handleRoomatePreference}
                required
              >
                <option value="No Roomate">No Roommate</option>
                <option value="Prefer Female">Prefer Female</option>
                <option value="Prefer Male">Prefer Male</option>
                <option value="Open to Any">Open to Any</option>
              </select>
            </div>
          </div>

          <fieldset className="my-4">
            <legend className="text-md font-semibold leading-6 text-gray-900">
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
                    checked={pets}
                    onChange={(e) => setPets(e.target.checked)}
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
                    checked={femaleHousehold}
                    onChange={(e) => setFemaleHousehold(e.target.checked)}
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
                    checked={lgbtqFriendly}
                    onChange={(e) => setLgbtqFriendly(e.target.checked)}
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
