import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
// import React from "react";

const User: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const { id, ...rest } = query;
  return (
    <>
      <h2>User ID={id}</h2>
      <pre>{JSON.stringify(rest)}</pre>
      <Link href="/">Go Home</Link>
    </>
  );
};

export default User;
