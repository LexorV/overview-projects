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
import pageEight from "../../images/tech-and-dev/47.png"
import pageNine from "../../images/tech-and-dev/48.png"
import pageTen from "../../images/tech-and-dev/49.png"
import pageEleven from "../../images/tech-and-dev/50.png"

export const Techanddev = () => {
    return (
        <section>
              <TemplatePage 
            title="Tech and Dev" 
            text=" Мой последний крупный проект, на данный момент ещё сделан не до конца.
            Ресурс позволяет создавать новые статьи, их редактировать и удалять. Форум 
             где можно создавать новые темы и  общатся как в чате в реальном времени(webSocket)
             Используется следующий стек технологий:                                                  
                                Vue-2/SCSS/nuxtJS на фронтенде и NestJS/postgreSQL на бэкенде. Бэкенд полностью выполнен, 
             сейчас в разработке веб-интерфейс.
             У данного приложения будет отдельно своя панель администратора и модератора
            которые могут удалять любые статьи, и только они могут их публиковать
            (но создавать могут и обычные пользователи)"
            demo={'https://tech-and-dev.lex-v.ru'}
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

            <PictureCard 
            description="Управление своими статьями"
            image={pageNine} 
            alt="picture" /> 

            
            <PictureCard 
            description="Личный кабинет"
            image={pageEight} 
            alt="picture" /> 

            <PictureCard 
            description="Изменение статей"
            image={pageTen} 
            alt="picture" />  

             <PictureCard 
            description="Форум"
            image={pageEleven} 
            alt="picture" />                 

            </TemplatePage>

        </section>

    )
}