import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getCookies, setCookies, removeCookies } from "cookies-next";

import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Home() {
  const SIGN_OUT = gql`
    query signOut {
      signOut
    }
  `;
  const [signOut, { data: response, error }] = useLazyQuery(SIGN_OUT);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <Link href="/">Home</Link>
        <Link href="/SignIn">Sign in</Link>
        <Link href="/SignUp">Sign up</Link>
        <Link href="/Dashboard">Dashboard</Link>
        <p onClick={() => signOut()}>Sign out</p>
      </div>
    </>
  );
}
