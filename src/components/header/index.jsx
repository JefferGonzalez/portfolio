import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";

import Matrix from "../canva";
import NavBar from "../nav-bar";
import Flag from "../flag";

export default function Header() {
  const { i18n } = useTranslation();

  const [flag, setFlag] = useState({
    country: "US",
    alt: "United State",
    lang: "English",
  });

  const changeLanguage = () => {
    if (flag.country === "CO") {
      setFlag({ country: "US", alt: "United State", lang: "English" });
      i18n.changeLanguage("es");
    } else {
      setFlag({ country: "CO", alt: "Colombia", lang: "Spanish" });
      i18n.changeLanguage("en");
    }
  };

  return (
    <>
      <div className="bg-dark fixed-top">
        <Matrix />
        <NavBar />
      </div>
      <Outlet />
      <button className="float-btn tooltipCustom" onClick={changeLanguage}>
        <Flag country={flag.country} alt={flag.alt} />
        <span className="tooltiptext">{flag.lang}</span>
      </button>
    </>
  );
}
