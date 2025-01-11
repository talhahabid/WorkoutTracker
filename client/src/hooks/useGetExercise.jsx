import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";
const apiBaseUrl = import.meta.env.VITE_API_URL;
export const useGetExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const getExercise = async () => {
    if (!user) return;

    try {
      const data = await makeApiCall(() =>
        fetch(`${apiBaseUrl}/workout/${user.user._id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        })
      );
      return data;
    } catch (err) {
      console.error("Failed to fetch exercises", err);
      return [];
    }
  };

  return { getExercise, loading, error };
};
