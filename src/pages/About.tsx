import React from 'react';
import TitlePage from "../components/TitlePage"
import style from "../pages/Home.module.scss"
const TitlePageText = 'このアプリについて'

const About: React.FC = () => {
  return (
    <div className={style.home}>
      <TitlePage
        title={TitlePageText}
      />

      <div>
        このアプリは自己学習用です。
      </div>
      </div>
  );
};

export default About;