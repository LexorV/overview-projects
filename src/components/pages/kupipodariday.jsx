import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/kupipodariday/19.png"
import pagetwo from "../../images/kupipodariday/20.png"
import pageThree from "../../images/kupipodariday/21.png"
import pagefour from "../../images/kupipodariday/22.png"
import pageFive from "../../images/kupipodariday/23.png"

export const Kupipodariday = () => {
    return (
        <section>
              <TemplatePage 
            title="Mesto" 
            text="Описание:
            Сервис, где каждый зарегистрированный пользователь может рассказать 
            о том, какой подарок он бы хотел получить,
             а также скинуться на подарок для другого пользователя,
              указав сумму, которую готов на это потратить.
            Задача стояла написать только backend, организовать контейнеризацию проекта 
            и его деплой на сервер(включая конфигурирование сервера). Frontend уже готовый."
            demo="https://lexorv.github.io/mesto-project"
            git="https://github.com/LexorV/mesto-project"
            > 

            <PictureCard 
            description="Главная страница"
            image={pageFive} 
            alt="picture" />  
             <PictureCard 
            description="Сущность подарков с указанными полями"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="У подарка может быть желающие скинутся (поддержать)
            "
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="У каждого пользователя может быть свой вишлист (список подарков которые хочет пользователь) "
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Сущность пользователя"
            image={pagefour} 
            alt="picture" />            

 

            </TemplatePage>

        </section>

    )
}