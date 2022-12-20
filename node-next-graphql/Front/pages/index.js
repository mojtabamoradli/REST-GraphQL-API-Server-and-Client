import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic"

const Data = dynamic(() => import ("../components/Data"), {ssr: false})
const AddData = dynamic(() => import ("../components/AddData"), {ssr: false})
const UpdateData = dynamic(() => import ("../components/UpdateData"), {ssr: false})
const DeleteData = dynamic(() => import ("../components/DeleteData"), {ssr: false})


const Container = styled.div`
  text-align: center;
`;

export default function Home() {

 

  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>


        <Data />
        <AddData />
        <UpdateData />
        <DeleteData />

      

      </Container>
    </>
  );
}
