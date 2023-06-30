import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Just+Another+Hand&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="w-screen h-screen bg-gradient-to-r from-blay to-awe">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
