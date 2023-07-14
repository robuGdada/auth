import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { back } = useRouter();
  const { data: userInfo } = useUserInfo();
  return (
    <>
      {userInfo &&
        userInfo.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
            {user.email}
            {user.dob}
            {user.password}
            {user.username}
            {user.address}
          </option>
        ))}
      <div onClick={back}>Hello,world!!</div>
    </>
  );
};

export default Index;
