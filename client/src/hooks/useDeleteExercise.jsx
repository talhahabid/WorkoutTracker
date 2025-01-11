import { useAuthContext } from "./useAuthContext";
import { useApi } from "./useApi";
const apiBaseUrl = import.meta.env.VITE_API_URL;

export const useDeleteExercise = () => {
  const { user } = useAuthContext();
  const { loading, error, makeApiCall } = useApi();
  const deleteExercise = async (id) => {
    if (!user) return;

    await makeApiCall(() =>
      fetch(`${apiBaseUrl}/workout/${id}`, {
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
