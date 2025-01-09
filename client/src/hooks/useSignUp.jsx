import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useApi } from "./useApi";

export const useSignUp = () => {
  const { loading, error, makeApiCall } = useApi();
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (username, email, password) => {
    try {
      const data = await makeApiCall(() =>
        fetch("http://localhost:4000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        })
      );

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });
        navigate("/");
      }
    } catch (err) {
      console.error("Signup failed:", err.message);
    }
  };

  return { signup, loading, error };
};
