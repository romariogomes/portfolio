import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const fadeOutAnimation = css`
  animation: ${fadeOut} 2s ease-out both;
`;

const defaultBlue = ({ theme }) => theme.colors.defaultBlue;
export const Container = styled.div`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  display: ${({ visible }) => (visible ? "block" : "none")};
  height: auto;
  width: 100%;
  ${({ visible }) => (visible ? fadeInAnimation : fadeOutAnimation)}
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Item = styled.div`
  padding: 30px;
  border-bottom: 1px solid ${defaultBlue};
`;

export const ItemLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${defaultBlue};
`;
