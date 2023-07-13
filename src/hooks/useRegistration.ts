import { API } from "@/api/API";
import { TUser } from "@/types/TUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserKeys } from "./useUserInfo";

const createUser = async (newUser: TUser) => {
  const response = await API.post("/registration", newUser);
  return response.data;
};

const useRegistration = () => {
  return useMutation({
    mutationFn: createUser,
    mutationKey: getUserKeys.all,
  });
};
export { useRegistration };
