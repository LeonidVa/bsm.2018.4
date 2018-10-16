import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";

import ym, { YMInitializer } from "react-yandex-metrika";

const handleRouteChange = url => {
  ym("hit", url);
};

Router.events.on("routeChangeComplete", handleRouteChange);

export default class MyApp extends App {
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
        <YMInitializer
          accounts={[132186]}
          options={{ defer: true }}
          version="2"
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}