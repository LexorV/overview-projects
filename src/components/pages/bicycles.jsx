import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'

import pageOne from "../../images/bicycles/30.png"
import pagetwo from "../../images/bicycles/31.png"
import pageThree from "../../images/bicycles/32.png"
import pagefour from "../../images/bicycles/33.png"

export const Bicycles = () => {
    return (
        <section>
             <TemplatePage 
            title="Велосипеды" 
            text="Адаптивный лендинг. С небольшим количеством JS"
            demo="https://lexorv.github.io/bicycles-project/"
            git="https://github.com/LexorV/bicycles-project"
            > 
             <PictureCard 
            description="Начальная часть страницы"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="Слайдер desktop"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Слайдер модальный 
            "
            image={pagetwo} 
            alt="picture" />


            <PictureCard 
            description="Переключение темы"
            image={pagefour} 
            alt="picture" />       


            </TemplatePage>

        </section>
    )
}




