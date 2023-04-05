import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/react-burger/11.png"
import pagetwo from "../../images/react-burger/12.png"
import pageThree from "../../images/react-burger/13.png"
import pagefour from "../../images/react-burger/14.png"
import pageFive from "../../images/react-burger/15.png"
import pageSix from "../../images/react-burger/16.png"
import pageEight from "../../images/react-burger/17.png"
import pageNine from "../../images/react-burger/18.png"

export const ReactBurger = () => {
    return (
        <section>
              <TemplatePage 
            title="React-бургер" 
            text="MPA приложение написаное на React. 
            В проекте используется API принимающие данные от сервера. 
            Пристствует форма регистрация пользователя, Websocket и  Drag and Drop.
             "
            demo="https://lexorv.github.io/react-burger"
            git="https://github.com/LexorV/react-burger"
            > 
             <PictureCard 
            description="Начальная часть страницы. Данные ингредиентов приходят с сервера.
            Пользователь может перетаскивать ингредиент с левого окна в правую область. Функционал Drag and Drop."
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="При попадании ингредиента в правую область(далее конструктор). В конструкторе появляется новый ингредиент."
            image={pageSix} 
            alt="picture" /> 

            <PictureCard 
            description="В ленте заказов используется websocket"
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="Модальное окно
           на любой ингредиент"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="Модальное окно
            в случае успешного оформления заказа
             (успех или неудача операции приходит с сервера)."
            image={pagefour} 
            alt="picture" />            


             <PictureCard 
            description="История заказов созданых пользователем"
            image={pageFive} 
            alt="picture" />   


            <PictureCard 
            description="Валидация формы регистрации"
            image={pageEight} 
            alt="picture" />

             <PictureCard 
            description="Валидация формы восстановления пароля"
            image={pageNine} 
            alt="picture" />               

            </TemplatePage>
        </section>

    )
}