import React from "react"
import styled from "styled-components"
import ButtonLink from '../components/ButtonLink'

interface HamburgerPageProps {
  isMenuOpen: boolean
}

const Hamburger = styled.div<{$isMenuOpen: boolean}>`
position: fixed;
z-index: 20;
transition: all.3s;
top: 7rem;
background-color: ${({ theme }) => theme.colors.base};
left: ${({$isMenuOpen}) => ($isMenuOpen ? '0' : '-20rem')};
width: 20rem;
height: calc(100vh - 7rem);
padding: 1.6rem;
`

const HamburgerPage: React.FC<HamburgerPageProps> = ({isMenuOpen}) => {
  return (
    <Hamburger $isMenuOpen={isMenuOpen}>
      <ButtonLink to="/" label="HOME" />
      <ButtonLink to="/about" label="about" />
      <ButtonLink to="/contact" label="contact" />
    </Hamburger>
  )
}

export default HamburgerPage