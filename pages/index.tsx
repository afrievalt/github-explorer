import { NextPage } from "next";
import Link from "next/link";
// import React from "react";

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/about">Go to about</Link>
    </>
  );
};

export default IndexPage;
