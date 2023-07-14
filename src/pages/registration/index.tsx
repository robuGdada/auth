import { useRouter } from "next/router";
import React, { useState } from "react";

const Registration: React.FC = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const { back } = useRouter();
  // const { mutate: createUser, isLoading: isCreating } = useRegistration({
  //   onSuccess: async (res: any) => {
  //     await createUser({
  //     });
  //   },
  // });
  const handleOnSubmit = () => {};
  return (
    <>
      <div className="registration-container">
        <div className="tnb-button" onClick={back}>
          back
        </div>
        <h2>Create New Account</h2>
        <form className="registration-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={handleOnSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
