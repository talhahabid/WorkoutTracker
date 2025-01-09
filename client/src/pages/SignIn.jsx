// DONT TOUCH - WORKING
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "../hooks/useSignIn";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { signin, loading, error } = useSignIn();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      await signin(username, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl mt-16 font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={handleFormChange}
          type="text"
          id="username"
          value={formData.username}
          placeholder="Username"
          required
          className="border rounded-md p-4 px-5 w-96 focus:outline-none"
        />

        <input
          onChange={handleFormChange}
          type="password"
          id="password"
          value={formData.password}
          placeholder="Password"
          required
          className="border rounded-md p-4 px-5 w-96 focus:outline-none"
        />

        <button className="bg-indigo-400 text-white rounded-md p-4 px-5 w-96 font-semibold hover:opacity-85 focus:outline-none">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signup">
            <span className="text-blue-600">Sign Up</span>
          </Link>
          {error && <p className="text-red-600 font-bold">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
