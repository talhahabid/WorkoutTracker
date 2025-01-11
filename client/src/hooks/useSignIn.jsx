// DONT TOUCH - WORKING
import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";
import { useNavigate } from "react-router-dom";
const apiBaseUrl = import.meta.env.VITE_API_URL;
export const useSignIn = () => {
  const { dispatch } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();
  const navigate = useNavigate();

  const signin = async (username, password) => {
    const data = await makeApiCall(() =>
      fetch(`${apiBaseUrl}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
    );

    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "LOGIN", payload: data });
    navigate("/");
  };

  return { signin, loading, error };
};
