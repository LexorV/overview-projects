import React from "react";
import {TemplatePage} from '../template-page/template-page'
import {PictureCard} from '../ui/picrure-card/picture-card'
import pageOne from "../../images/algososh/34.png"
import pagetwo from "../../images/algososh/35.png"
import pageThree from "../../images/algososh/36.png"
import pagefour from "../../images/algososh/37.png"
import pageFive from "../../images/algososh/38.png"
import pageSix from "../../images/algososh/46.png"
import pageEight from "../../images/algososh/47.png"
import pageNine from "../../images/algososh/48.png"

export const Algososh = () => {
    return (
        <section>
              <TemplatePage 
            title="Алгоритмы" 
            text="React приложение визуального отображения наиболее популярных алгоритмов. 
            Покрытие проекта юнит-тестами и E2E тестами."
            demo="https://lexorv.github.io/mesto-project"
            git="https://github.com/LexorV/mesto-project"
            > 
             <PictureCard 
            description="Главная страница"
            image={pageOne} 
            alt="picture" />

            <PictureCard 
            description="Выполнение сортировки массива выбором
            "
            image={pagetwo} 
            alt="picture" />

            <PictureCard 
            description="Отсортированный массив"
            image={pageThree} 
            alt="picture" />

            <PictureCard 
            description="На этом экране просисходит разворот строки в обратную сторону"
            image={pagefour} 
            alt="picture" />            


             <PictureCard 
            description="На этом экране реализовано удаление и добавление элементов в связный список."
            image={pageFive} 
            alt="picture" /> 

            <PictureCard 
            description="Unit тесты приложения"
            image={pageSix} 
            alt="picture" /> 


            <PictureCard 
            description="E2E тесты. Используется Cypress"
            image={pageEight} 
            alt="picture" />

             <PictureCard 
            description="Cypress тест приложения"
            image={pageNine} 
            alt="picture" />  

            </TemplatePage>

        </section>

    )
}