import "@/styles/globals.css";
import "@/styles/extend.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DarkModeContextProvider } from "@/context/darkModeContext";
import { AuthContextProvider } from "@/context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </DarkModeContextProvider>
  )
}
