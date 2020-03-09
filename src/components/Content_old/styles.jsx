import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

export const Section = styled.li`
  background-color: transparent;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Text = styled.text`
  font-size: ${({ theme }) => theme.fontSizes.text};
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutTextContainer = styled.div``;

export const PhotoContainer = styled.div``;

export const Photo = styled.div`
  width: 150px;
  height: 150px;
  background-image: url("romario.jpg");
  background-size: cover;
`;
