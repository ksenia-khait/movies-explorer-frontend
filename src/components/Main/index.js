import React from 'react';
import Promo from "../Promo";
import NavTab from "../NavTab";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";

const Main = () => {
    return (
        <main className="content">
            <Promo/>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    );
};

export default Main;
