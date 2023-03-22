import "../styles/globals.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/graphql`,
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
