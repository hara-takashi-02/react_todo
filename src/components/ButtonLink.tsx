/**
 * ----------
 * リンクボタン
 * ----------
 */
import React from "react"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

interface ButtonLinkPageProps {
  to: string;
  label: string;
}

const ButtonLink = styled.button`
display: block;
padding: 1rem;
width: 100%;
border-radius: .5rem;
text-align: left;
&:hover{
  background-color: ${({ theme }) => theme.colors.title};
}
`

const ButtonLinkPage: React.FC<ButtonLinkPageProps> = ({ to, label }) => {
  const navigate = useNavigate()

  const goToPage = () => {
    navigate(to);
  }

  return (
    <ButtonLink onClick={goToPage}>{label}ページ</ButtonLink>
  )
}

export default ButtonLinkPage