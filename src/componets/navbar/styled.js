import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #1d1d24;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  position: relative;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  position: absolute;
  right: 0;
  background-color: #1d1d24;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  cursor: pointer;
`;

export const IconQuadrado = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 25%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  cursor: pointer;
`;

export const IconSemRadius = styled.img`
  background-color: #1d1d24;
  width: 31px;
  height: 31px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);

  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #1d1d24;
  border: none;
`;

export const IconLogo = styled.img`
  background-color: #1d1d24;
  width: 33px;
  height: 33px;
`;