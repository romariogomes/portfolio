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
    text: "16px",
    title: "18px",
    logo: "30px",
    menu: "16px"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);
