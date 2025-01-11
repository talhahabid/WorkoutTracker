import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";
const apiBaseUrl = import.meta.env.VITE_API_URL;
export const useEditProfile = () => {
  const { user, dispatch } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const editProfile = async (username, password, workoutSplit) => {
    if (!user) return;
    try {
      const data = await makeApiCall(() =>
        fetch(`${apiBaseUrl}/user/profile/${user.user._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwtToken}`,
          },
          body: JSON.stringify({ username, password, workoutSplit }),
        })
      );

      const updatedUser = {
        ...user,
        user: {
          ...user.user,
          username: username || user.username,
          workoutSplit: workoutSplit || user.user.workoutSplit,
        },
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      dispatch({ type: "LOGIN", payload: updatedUser });

      return data;
    } catch (err) {
      console.error("Profile edit failed:", err.message);
    }
  };

  return { editProfile, loading, error };
};
