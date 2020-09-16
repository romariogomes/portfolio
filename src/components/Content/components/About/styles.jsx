import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.opensans};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ContainerInfo = styled.div`
  width: 70%;
`;

export const ContainerPhoto = styled.div`
  padding: 20px;
  width: 30%;
`;

export const Photo = styled.div`
  height: 250px;
  max-width: 400px;
  background-color: yellow;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const JobTitle = styled.h2`
  font-weight: 300;
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.defaultBlue};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  font-weight: bold;
  padding: 0.375rem 1rem;
  height: 2.5rem;
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;
