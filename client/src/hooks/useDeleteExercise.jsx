import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";

export const useDeleteExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();

  const deleteExercise = async (id) => {
    if (!user) return;

    await makeApiCall(() =>
      fetch(`http://localhost:4000/workout/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwtToken}`,
        },
      })
    );
  };

  return { deleteExercise, loading, error };
};
