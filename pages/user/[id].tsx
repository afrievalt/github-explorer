import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Json from "../../components/Json";
// import React from "react";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const { ok } = response;
  if (!ok) {
    throw Error("Something went wrong");
  }
  const data: unknown = await response.json();
  return data;
};

const User: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const { id, ...rest } = query;
  // const { data = {}, error } = useSWR(`/api/user/${id}`, fetcher);
  const { data = {}, error } = useSWR(
    `https://api.github.com/users/afrievalt/repos`,
    fetcher
  );
  console.log(data, error);

  return (
    <>
      <h2>User ID={id}</h2>
      <Json data={rest} />
      <Json data={data} />
      <Link href="/">Go Home</Link>
    </>
  );
};

export default User;
