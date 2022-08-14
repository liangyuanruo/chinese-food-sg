import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

export default function Chakra(props: any) {
  const { cookies, children, theme } = props;
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps(props: any) {
  const { req } = props;
  return {
    props: {
      // first time users will not have any cookies
      cookies: req.headers.cookie ?? "",
    },
  };
}
