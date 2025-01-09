import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";

export const useAddExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const addExercise = async (exercise) => {
    if (!user) return;

    await makeApiCall(() =>
      fetch(`http://localhost:4000/workout/${user.user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwtToken}`,
        },
        body: JSON.stringify(exercise),
      })
    );
  };

  return { addExercise, loading, error };
};
