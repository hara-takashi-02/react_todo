import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Routes, Route } from 'react-router-dom'
import Header from "./template/Header"
import Hamburger from "./template/Hamburger"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import '@/styles/app.scss'

const Main = styled.main`
width: 100%;
`

const Content = styled.main<{ $isMenuOpen: boolean }>`
transition: .3s;
margin-left: auto;
@media (min-width: 768px) {
  width: ${({$isMenuOpen}) => ($isMenuOpen ? 'calc(100% - 20rem)' : '100%')};
  }
`

const Section = styled.section<{ $isMenuOpen: boolean }>`
max-width: 800px;
transition: .3s;
width: 100%;
margin: 0 auto;
`

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  /**
   * ----------
   * メニュー開閉
   * ----------
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Content $isMenuOpen={isMenuOpen}>
          <Hamburger isMenuOpen={isMenuOpen} />
          <Section $isMenuOpen={isMenuOpen}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Section>
        </Content>
      </ThemeProvider>
    </Main>
  );
};

export default App
