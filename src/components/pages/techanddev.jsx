import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/tech-and-dev/39.png"
import pagetwo from "../../images/tech-and-dev/40.png"
import pageThree from "../../images/tech-and-dev/41.png"
import pagefour from "../../images/tech-and-dev/42.png"
import pageFive from "../../images/tech-and-dev/43.png"
import pageSix from "../../images/tech-and-dev/44.png"
import pageSeven from "../../images/tech-and-dev/45.png"

export const Techanddev = () => {
    return (
        <section>
              <TemplatePage 
            title="Tech and Dev" 
            text=" Мой последний проект, на данный момент ещё сделан не до конца.
             Используется Vue-2/SCSS/nuxtJS на фронтенде и NestJS/postgreSQL на бэкенде. Бэкенд полностью сделан, сейчас делается фронтенд
             Описание: Проект похожий на проект  |когда я вырасту| но имеет ряд отличий. 
             По сути, это блог создание статей. У приложения будет возможность создания статей
             с тегами и картинкой, которая заливается 
             на сервер целиком файлом (все предыдущие проекты передавали  URL картинки).
             У данного приложения будет отдельно своя панель администратора и модератора
            которые могут удалять любые статьи, и только они могут их публиковать
            (но создавать могут и обычные пользователи), так же будет форум на webSocket"
            > 
             <PictureCard 
            description="Главная страница с статьями"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="Статья с картинкой.
            "
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="Создание комментариев"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Создание статей с картинкой и валидацией"
            image={pagefour} 
            alt="picture" />            


             <PictureCard 
            description="Создание статей с картинкой и валидацией"
            image={pageFive} 
            alt="picture" />   

            <PictureCard 
            description="Авторизация"
            image={pageSix} 
            alt="picture" /> 
            <PictureCard 
            description="Валидация формы авторизации"
            image={pageSeven} 
            alt="picture" />              


            </TemplatePage>

        </section>

    )
}