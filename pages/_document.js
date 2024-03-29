import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@600;800&family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/carrot-ico.svg" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
