import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Custom404() {
  const router = useRouter()


  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [router])

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <h1>Page Not Found</h1>
        <h2>Error 404</h2>
      </div>
    </>
  );
}
