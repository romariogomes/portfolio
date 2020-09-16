import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  font-family: ${({ theme }) => theme.fonts.opensans};
  position: relative;
  padding-left: 1.5rem;
  margin: 0 10px 20px 0px;

  &:before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.colors.defaultBlue};
    position: absolute;
    left: 0;
    top: 0;
  }
`;
