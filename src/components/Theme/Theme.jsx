import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
  colors: {
    defaultBlue: "#00c4f3",
    textColor: "#777"
  },
  fonts: {
    opensans: "'Open Sans', sans-serif",
    raleway: "'Raleway', sans-serif"
  },

  fontSizes: {
    text: "14px",
    title: "16px",
    logo: "30px",
    menu: "16px"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
