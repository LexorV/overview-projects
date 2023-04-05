import React from "react";
import styles from "./travel.module.css";
import {TemplatePage} from '../../template-page/template-page'
import {PictureCard} from '../../ui/picrure-card/picture-card'
import pageOne from "../../../images/russian-travel/1.png"
import pagetwo from "../../../images/russian-travel/2.png"
import pageThree from "../../../images/russian-travel/3.png"
import pagefour from "../../../images/russian-travel/3.png"

export const RussianTravel = () => {
    return (
        <section>
            <TemplatePage 
            title="Путешествие по России" 
            text="Описание: небольшой Адаптивный лендинг,где используется методология БЭМ"
            demo="https://lexorv.github.io/russian-travel"
            git="https://github.com/LexorV/russian-travel"
            > 
            <PictureCard 
            description="Начальная часть страницы"
            image={pageOne} 
            alt="picture"  />

              <PictureCard 
            description="Grid таблица"
            image={pagetwo} 
            alt="picture"  />

              <PictureCard 
            description="Мобильная версия"
            image={pageThree} 
            alt="picture"  />

            <PictureCard 
            description="Мобильная версия Grid"
            image={pagefour} 
            alt="picture"  />
            </TemplatePage>
            
        </section>
    )


}