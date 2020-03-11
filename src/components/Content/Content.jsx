import React from "react";
import { About } from "./components/About";
// import { useData } from "hooks/useData";
import { Container } from "./styles";

const Content = () => {
  // const { pageContent } = useData();
  return (
    <Container>
      <About />
    </Container>
  );
};

export { Content };
