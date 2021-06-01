import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({
  ...config,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
});

export default theme;
