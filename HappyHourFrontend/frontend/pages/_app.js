import '../styles/globals.scss'
import '../styles/bootstrap.css'
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";
function MyApp({ Component, pageProps }) {
  <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
</Head>
  return(
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    )
}

export default MyApp
