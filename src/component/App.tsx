import { useRouter } from "next/router";
import React from "react";

const App = () => {
  const { push } = useRouter();
  return <div onClick={() => push("/auth")}> Login</div>;
};

export { App };
