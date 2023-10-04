import { NextPage } from "next";
import Link from "next/link";
// import React from "react";

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>This is ABOUT page</h1>
      <Link href="/">Go Home</Link>
    </>
  );
};

export default AboutPage;
