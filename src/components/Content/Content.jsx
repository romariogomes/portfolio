import React from "react";
import { About } from "./components/About";
import { Professional } from "./components/Professional";
// import { useData } from "hooks/useData";
import { Container } from "./styles";

const Content = () => {
  // const { pageContent } = useData();
  return (
    <Container>
      <About />
      <Professional />
    </Container>
  );
};

export { Content };
