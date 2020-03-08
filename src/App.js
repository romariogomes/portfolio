import React from "react";

import { Header } from "components/Header";
import { Content } from "components/Content";
import { Theme } from "components/Theme";

export const App = () => {
  return (
    <Theme>
      <Header />
      <Content />
    </Theme>
  );
};
