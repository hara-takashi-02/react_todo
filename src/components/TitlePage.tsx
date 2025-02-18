/**
 * ----------
 * ページタイトル
 * ----------
 */
import React from "react"
import styled from "styled-components"

interface TitlePageProps {
  title: string
  icon?: string
}

const Title = styled.h2<{ $icon?: string }>`
font-size: ${({ theme }) => theme.fontSizes.medium};
background-color: ${({ theme }) => theme.colors.title};
padding: .5rem;
padding-left: 4rem;
border-radius: 0.5rem;
position: relative;

&::before{
position: absolute;
content: "";
z-index: 1;
top: 50%;
left: 1rem;
transform: translate(0, -50%);
width: 2rem;
height: 2rem;
mask-image: url(${(props) => props.$icon});
-webkit-mask-image:url(${(props) => props.$icon});
mask-size: contain;
-webkit-mask-size: contain;
mask-repeat: no-repeat;
-webkit-mask-repeat: no-repeat;
background-color: ${({theme}) => theme.colors.text };
}
`

const TitlePage: React.FC<TitlePageProps> = ({ title, icon }) => {
  return (
    <Title $icon={icon}>{title}</Title>
  )
}

export default TitlePage