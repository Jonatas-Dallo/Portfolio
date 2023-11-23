import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, HeaderWrapper, Icon, IconContainer, IconLogo, IconQuadrado, IconSemRadius, Nav } from "./styled";
import discord from "../../assets/icons/discord.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import minhaLogo from "../../assets/img/logo-minha.png";
import copy from "copy-to-clipboard"; 

const NavLink = styled(Link)<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#f9004d" : "white")};
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #f9004d;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #f9004d;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  ${(props) =>
    props.active &&
    `&::after {
      width: 100%;
    }`}
`;

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const copiarEmail = () => {
    copy("jonatasmathiasdallo@gmail.com");
    alert(`Copiado!`);
  }

  const copiarDiscord = () => {
    copy("bob_55");
    alert(`Copiado!`);
  }

  return (
    <HeaderWrapper>
      <Nav>
        <IconLogo src={minhaLogo} alt="Minha logo" />
        <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
        <NavLink to="/hardskills" active={location.pathname === "/hardskills"}>Hardskills</NavLink>
        <NavLink to="/projetos" active={location.pathname === "/projetos"}>Projetos</NavLink>
        <IconContainer>
          <Link to="https://github.com/Jonatas-Dallo" target="_blank">
            <Icon src={github} alt="GitHub" />
          </Link>
          <Link to="https://www.linkedin.com/in/jonatas-mathias-147638206/" target="_blank">
            <IconQuadrado src={linkedin} alt="LinkedIn" />
          </Link>
          <Button onClick={copiarEmail}>
            <IconSemRadius src={email} alt="Email" />
          </Button >
          <Button onClick={copiarDiscord}>
            <IconSemRadius src={discord} alt="Discord" />
            </Button >
        </IconContainer>
      </Nav>
    </HeaderWrapper>
  );
};

export default Navbar;