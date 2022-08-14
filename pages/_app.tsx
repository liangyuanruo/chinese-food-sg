import "../styles/globals.css";
import type { AppProps } from "next/app";
import { extendTheme, Theme } from "@chakra-ui/react";

import Chakra from "./Chakra";

const customTheme: Partial<Theme> = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

const theme = extendTheme(customTheme);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra theme={theme} cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from "./Chakra";
