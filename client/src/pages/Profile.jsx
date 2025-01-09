import React, { useReducer, useState } from "react";
import { profileReducer } from "../reducers/ProfileReducer";
import { useSignOut } from "../hooks/useSignOut";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEditProfile } from "../hooks/useEditProfile";



const Profile = () => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    username: user.user.username,
    password: user.user.password,
    workoutSplit: user.user.workoutSplit,
  });
  const { signOut } = useSignOut();
  const initialState = { disabled: true };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const { editProfile, error } = useEditProfile();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
    dispatch({ type: "TOGGLE_DISABLED" });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!state.disabled) {
      try {
        await editProfile(
          formData.username,
          formData.password,
          formData.workoutSplit
        );
        dispatch({ type: "TOGGLE_DISABLED" });
      } catch (err) {
        console.error("Error saving profile:", err.message);
      }
    }
  };

  return (
    <form className="flex flex-col items-center gap-6">
      <img
        className="rounded-full w-44 mt-10"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
        alt=""
      />
      <div className="flex flex-col">
        <p className="font-semibold">Username</p>
        <input
          onChange={handleFormChange}
          className="p-3 outline-none rounded-md w-72 border-2 border-black mb-4"
          type="text"
          placeholder={state.disabled ? "Username" : formData.username}
          id="username"
          value={formData.username}
          disabled={state.disabled}
          required
        />
        <p className="font-semibold">Password</p>
        <input
          onChange={handleFormChange}
          className="p-3 outline-none rounded-md w-72 border-2 border-black mb-4"
          type={state.disabled ? "password" : "text"}
          placeholder="Password"
          id="password"
          value={formData.password}
          disabled={state.disabled}
          required
        />
        <p className="font-semibold">Workout Split</p>
        <input
          onChange={handleFormChange}
          className="p-3 outline-none rounded-md w-72 border-2 border-black mb-4"
          type="text"
          placeholder={state.disabled ? "Workout Split" : formData.workoutSplit}
          id="workoutSplit"
          value={formData.workoutSplit}
          disabled={state.disabled}
          required
        />
        <button
          onClick={state.disabled ? handleChange : handleSave} 
          className="p-3 w-72 bg-indigo-300 text-white font-semibold rounded-md hover:opacity-90 active:opacity-85 mb-4"
        >
          {state.disabled ? "Edit Profile" : "Save Changes"}
        </button>

        <button
          onClick={signOut}
          className="bg-red-700 p-3 w-72 text-white font-semibold rounded-md hover:opacity-90 active:opacity-85"
        >
          Sign Out
        </button>
      </div>
      {error && (
        <p className="text-red-500 font-semibold mb-10">ERROR =&gt; {error}</p>
      )}
    </form>
  );
};

export default Profile;