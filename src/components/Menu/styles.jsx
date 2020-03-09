import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.defaultBlue};
  color: #fff;
  width: 300px;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.opensans};
  font-size: ${({ theme }) => theme.fontSizes.menu};
`;
