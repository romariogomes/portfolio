import styled from "styled-components";

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.opensans};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: justify;
  font-weight: 400;
  line-height: 1.5;
`;
