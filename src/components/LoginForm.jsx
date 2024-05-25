import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const LoginForm = () => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username), where('password', '==', password));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert('Invalid username or password')
      } else {
        // redirect("/Home")
        alert('Valid entry!')
        navigate('/')
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 bg-indigo-100 rounded-xl">
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-semibold text-center">Login</h1>
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
              />
            </div>

          </div>
        </div>
        {/* *Make this look better* */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;