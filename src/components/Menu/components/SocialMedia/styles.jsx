import styled from "styled-components";

export const Container = styled.div`
  margin: 24px auto 0 auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 5px 20px;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 5px;
`;

export const SocialMediaIcon = styled.div`
  background-color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  svg {
    margin: 0.55em;
    fill: #5bc3d5;
  }
`;
