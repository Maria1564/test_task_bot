import React, { useState } from "react";
import style from "./Sidebar.module.css";
import logoIcon from "../../../assets/logo.png";
import lang from "../../../assets/lang.png";
import arrow from "../../../assets/arrow-down.png";
import MainContent from "./MaintContent";

const Sidebar: React.FC = () => {
  

  const [active, setActive] = useState<boolean>(false);

 

  return (
    <div className={style.sidebar}>
      <div className={style.top}>
        <img src={logoIcon} alt="logo" className="logo" />
        <div className={style.lang_dropdown} onClick={() => setActive(!active)}>
          <img src={lang} alt="lang" />
          <span className={style.text}>RU</span>
          <img
            src={arrow}
            alt="arrow down"
            className={`${style.arrow} ${active ? style.arrow_active : ""}`}
          />
        </div>
        <div className={`${style.lang_menu} ${active ? style.menu_active : ""}`}>
            <div className={style.ru}>RU</div>
            <div className={style.en}>EN</div>
        </div>
      </div>
      
      <MainContent/>
      
    </div>
  );
};

export default Sidebar;
