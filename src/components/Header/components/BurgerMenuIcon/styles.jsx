import styled from "styled-components";

const defaultBlue = ({ theme }) => theme.colors.defaultBlue;

export const BurgerMenuSvg = styled.svg`
  fill: ${defaultBlue};
  height: 25px;
  width: 25px;
  padding: 5px;
  border: 1px solid ${defaultBlue};
  border-radius: 5px;
  align-self: center;
  margin: auto 30px;
  display: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media screen and (max-width: 805px) {
    display: block;
  }
`;
