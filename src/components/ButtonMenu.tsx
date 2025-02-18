import React from "react"
import styled from "styled-components"

interface ButtonMenuProps {
  toggleMenu: () => void
  isMenuOpen: boolean
}

const ButtonMenu = styled.button`
width: 4.4rem;
height: 4.4rem;
position: relative;
border-radius: 50%;
&:hover{
  background-color: ${({ theme }) => theme.colors.title};
}

  span{
    background-color: ${({ theme }) => theme.colors.text};
    position: absolute;
    content: "";
    width: 40%;
    height: 2px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:first-of-type{
      top: 50%;
    }
    &:last-of-type{
      top: 65%;
    }
  }
`

const ButtonMenuPage: React.FC<ButtonMenuProps> = ({ toggleMenu }) => {
  return (
    <ButtonMenu onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </ButtonMenu>
  )
}

export default ButtonMenuPage