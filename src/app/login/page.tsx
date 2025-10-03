"use client";

import { useLogin } from "@refinedev/core";
import Image from "next/image";

export default function Login() {
  const { mutate: login } = useLogin();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={() => login({})}>Sign in</button>
      <p>
        Powered by
        <Image
          style={{ padding: "0 5px" }}
          alt="Google"
          src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
        />
        Google
      </p>
    </div>
  );
}
