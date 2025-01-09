import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";

export const useEditExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const editExercise = async (_id, sets, reps, weight) => {
    if (!user) return;

    await makeApiCall(() =>
      fetch(`http://localhost:4000/workout/${user.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwtToken}`,
        },
        body: JSON.stringify({ _id, sets, reps, weight }),
      })
    );
  };

  return { editExercise, loading, error };
};
