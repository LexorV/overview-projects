import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/mesto/5.png"
import pagetwo from "../../images/mesto/6.png"
import pageThree from "../../images/mesto/7.png"
import pagefour from "../../images/mesto/8.png"
import pageFive from "../../images/mesto/9.png"
import pageSix from "../../images/mesto/10.png"

export const Mesto = () => {
    return (
        <section>
              <TemplatePage 
            title="Mesto" 
            text="Описание:
             Адаптивное SPA приложение 
             с возможностями добавления изображения 
             и редактирования профиля пользователя."
            demo="https://lexorv.github.io/mesto-project"
            git="https://github.com/LexorV/mesto-project"
            > 
             <PictureCard 
            description="Начальная часть страницы"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="Модальное окно и валидация окна.
            Добавление URL картинки и описание к ней.
            "
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="Модальное окно.
            Изменение профиля"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Модальное окно.
            открытие картинки"
            image={pagefour} 
            alt="picture" />            


             <PictureCard 
            description="Мобильная версия"
            image={pageFive} 
            alt="picture" />   

            <PictureCard 
            description="Мобильная версия модального окна"
            image={pageSix} 
            alt="picture" />            


            </TemplatePage>

        </section>

    )
}