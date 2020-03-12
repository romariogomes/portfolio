import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.opensans};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: justify;
  font-weight: 400;
  line-height: 1.5;
`;
