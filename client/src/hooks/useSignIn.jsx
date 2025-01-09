// DONT TOUCH - WORKING
import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const { dispatch } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();
  const navigate = useNavigate();

  const signin = async (username, password) => {
    const data = await makeApiCall(() =>
      fetch("http://localhost:4000/auth/signin", {
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
