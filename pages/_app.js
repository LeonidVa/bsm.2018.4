import React from "react";
import App, { Container } from "next/app";

import { YMInitializer } from "react-yandex-metrika";
import { Head } from "next/document";

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
          options={{ defer: true}}
          version="2"
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}