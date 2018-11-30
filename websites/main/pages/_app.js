import React from "react";
import App, { Container } from "next/app";
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from '@store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
  
    return (
      <Container>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
            <React.Fragment>
              <Component {...pageProps} />
              {process.browser && <ToastContainer />}
            </React.Fragment>
          {/* </PersistGate> */}
        </Provider>
      </Container>
    );
  }
}

export default MyApp;