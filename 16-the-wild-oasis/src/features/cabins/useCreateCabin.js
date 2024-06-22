import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";

export function useCreateCabin() {
  //   const { reset } = useForm();

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("New cabin successfully created");

      //   reset();
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createCabin };
}
