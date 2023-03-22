import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";

const RESTData = dynamic(() => import("../components/RESTData"), { ssr: false });
const RESTAddData = dynamic(() => import("../components/RESTAddData"), { ssr: false });
const RESTUpdateData = dynamic(() => import("../components/RESTUpdateData"), { ssr: false });
const RESTDeleteData = dynamic(() => import("../components/RESTDeleteData"), { ssr: false });

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
        <p>RESTFUL_DATA</p>
        <RESTData />

        <RESTAddData />
        <RESTUpdateData />
        <RESTDeleteData />
      </Container>
    </>
  );
}
