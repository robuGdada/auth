import { API } from "@/api/API";
import { TUser } from "@/types/TUser";
import { QueryFunction, useQuery } from "@tanstack/react-query";

export const getUserKeys = {
  all: ["getUser"] as const,
};

type TGetUserQueryKey = typeof getUserKeys.all;

const fetchUserData: QueryFunction<TUser[], TGetUserQueryKey> = async () => {
  const response = await API.get("/registration");
  return response.data;
};

const useUserInfo = () => {
  return useQuery({
    queryKey: getUserKeys.all,
    queryFn: fetchUserData,
  });
};

export { useUserInfo };
