import "../styles/globals.css";

import Head from "next/head";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/graphql`,
    credentials: "include", // Need to be commented if you want apollo sandbox to work
  }),
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
