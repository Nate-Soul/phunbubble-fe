import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";
// import { DarkModeContext } from "@/context/darkModeContext";

export default function Document() {

  // const { darkMode } = useContext(DarkModeContext);

  return (
    <Html lang="en" className={`scroll-smooth`}>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
