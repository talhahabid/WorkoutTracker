import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";

export const useGetExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const getExercise = async () => {
    if (!user) return;

    try {
      const data = await makeApiCall(() =>
        fetch(`http://localhost:4000/workout/${user.user._id}`, {
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
