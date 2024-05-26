import React, { useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

import "./Animation.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Invalid email or password");
      } else {
        // alert('Valid entry!')
        querySnapshot.forEach((doc) => {
          localStorage.setItem("userid", doc.id);
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="mx-auto py-8 px-8 w-1/2 rounded-xl fadeInBottom cssanimation">
      <form onSubmit={onSubmit}>
        <h1 className="text-4xl font-light text-center">Login</h1>
        <div className="flex flex-col my-8">
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 text-white"
            >
              Email
            </label>
            <div className="">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="password"
              className="block text-md font-medium leading-6 text-white"
            >
              Password
            </label>
            <div className="">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* *Make this look better* */}
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="card rounded-full bg-white px-8 py-2 text-md font-medium text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </button>
        </div>
        <div className="flex justify-center my-4">
          <p style={loginTextStyle}>
            Don't have an account?{" "}
            <a
              href="/register"
              style={registerLinkStyle}
              className="hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
