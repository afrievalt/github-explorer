import { NextPage } from "next";
import Link from "next/link";
// import React from "react";

const Me: NextPage = () => {
  return <><h1>This is ABOUT/me page</h1>
  <Link href="/about">Go back to ABOUT</Link>
  </>;
};

export default Me;
