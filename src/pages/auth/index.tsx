import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { back } = useRouter();
  return <div onClick={back}>Hello,world!!</div>;
};

export default index;
