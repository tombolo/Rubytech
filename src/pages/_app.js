import { SessionProvider, useSession } from "next-auth/react";
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store = {store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
