import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import client from 'lib/client';
import { ApolloProvider} from '@apollo/client'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
