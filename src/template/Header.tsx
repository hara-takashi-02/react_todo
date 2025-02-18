import React from "react"
import styled from "styled-components"
import ButtonMenu from "../components/ButtonMenu"


interface HeaderPageProps {
  toggleMenu: () => void
  isMenuOpen: boolean
}

const Header = styled.header<{$isMenuOpen: boolean}>`
padding: 1rem;
transition: .3s;
position: sticky;
top: 0;
left: 0;
z-index: 10;
backdrop-filter: blur(5px);
//padding-left: ${({$isMenuOpen}) => ($isMenuOpen ? '21rem' : '1rem')};
`

const HeaderPage: React.FC<HeaderPageProps> = ({toggleMenu, isMenuOpen}) => {
  return (
    <Header $isMenuOpen={isMenuOpen}>
      <ButtonMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </Header>
  )
}

export default HeaderPage