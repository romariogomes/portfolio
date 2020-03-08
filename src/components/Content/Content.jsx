import React from "react";
import { useData } from "hooks/useData";
import {
  AboutContainer,
  AboutTextContainer,
  PhotoContainer,
  Container,
  Photo,
  Section,
  Title,
  Text
} from "./styles";

const Content = () => {
  const { pageContent } = useData();
  return (
    <Container>
      <Section id={`#${pageContent.about.title.toLowerCase()}`}>
        <AboutContainer>
          <AboutTextContainer>
            <Title>{pageContent.about.title}</Title>
            <Text>{pageContent.about.text}</Text>
          </AboutTextContainer>
          <PhotoContainer>
            <Photo />
          </PhotoContainer>
        </AboutContainer>
      </Section>
      <Section id={`#${pageContent.professional.title.toLowerCase()}`}>
        <Title>{pageContent.professional.title}</Title>
        <Text>{pageContent.professional.text}</Text>
      </Section>
    </Container>
  );
};

export { Content };
