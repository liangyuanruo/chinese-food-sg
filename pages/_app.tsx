import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Theme } from "@chakra-ui/react";

const customTheme: Partial<Theme> = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
