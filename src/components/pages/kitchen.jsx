import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/kitchen/24.png"
import pagetwo from "../../images/kitchen/25.png"
import pageThree from "../../images/kitchen/26.png"
import pagefour from "../../images/kitchen/27.png"
import pageFive from "../../images/kitchen/28.png"
import pageSix from "../../images/kitchen/29.png"

export const Kitchen = () => {
    return (
        <section>
              <TemplatePage 
            title="Mesto" 
            text="Описание: Командный проект Web блога.
             Возможности регистрации лайков, создание статей
              и их комментирование"
            demo="https://redtypes.github.io/react-project-kitchen-frontend/"
            git="https://github.com/RedTypes/react-project-kitchen-frontend"
            > 
             <PictureCard 
            description="Главная страница"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="Настройка аккаунта.
            "
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="Фильтр по тегам"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Комментирование статей"
            image={pagefour} 
            alt="picture" />            


             <PictureCard 
            description="Новая статья"
            image={pageFive} 
            alt="picture" />   

            <PictureCard 
            description="Открытие чужого пользователя"
            image={pageSix} 
            alt="picture" />            


            </TemplatePage>

        </section>

    )
}