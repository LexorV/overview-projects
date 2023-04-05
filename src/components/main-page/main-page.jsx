import React from "react";
import { Link } from "react-router-dom";

import styles from "./main-page.module.css";



export const MainPage = () => {
  return (
    <main className={styles.main}>
        <h1 className={styles.hending}>Сопроводительное письмо в братство кодеров</h1>
        <h2>Алоха, кодеры! Зовут Меня Алексей!</h2>
        <div className={styles.text_box}>
        <p> Хочу попопасть к вам в команду!</p>
        <p> Немного о себе:</p>
        <p> Начну я пожалуй с того как начал свой путь. Ранее работал Инженером/Системным администратором, в ходе работы часто сталкивался с web-приложениями(не сайтами).
        Частично сам занимался их развёртыванием и понял что хочу делать данные приложения сам.</p>
        <p>Уже почти пару лет пишу Web Приложения. 
        За всё время работал сначало на VanillaJS потом на React, потом на Node.js, сейчас пишу с помощью Vue.js 
        (решил перепробовать максимум технолгий пока есть время). Во всех проектах используется HTML5, CSS3 (что наверное логично). 
        Есть желание стать сильным фулстек разработчиком. Сейчас уже могу писать приложения с нуля до релиза(backend на nestJS/PostgreSQL).
        </p>
        <p> Ищу команду опытных разработчиков, для выполнения с ними нужных обществу задач. И повышение собственной квалификации.</p>
        </div>
        <p> Всего выполнено 9 основных проектов(есть ещё мелкие проекты), и один на этапе скорого релиза:</p>
       <div className={styles.card_box}>
        <div className={styles.card}>
        <h3 className={styles.card_heading} > Проекты лендингов на VanillaJS</h3>
        <Link className={styles.link} to="/russian-travel">
          <div> 1. Путешествие по России</div>
        </Link>
        <Link className={styles.link} to="/mesto">
          <div> 2. Mesto</div>
        </Link>
        <Link className={styles.link} to="/bicycles">
          <div> 3. Велосипеды</div>
        </Link>
        </div>

        <div className={styles.card}>
        <h3 className={styles.card_heading}> Проекты на React</h3>
        <Link className={styles.link} to="/react-burger">
          <div> 1. React-бургер</div>
        </Link>
        <Link className={styles.link} to="/algorithms">
          <div> 2. Алгоритмы</div>
        </Link>
        <Link className={styles.link} to="/when-i-grow-up">
          <div> 3. Проект "когда я вырасту"</div>
        </Link>
        </div>
        <div className={styles.card}>
       <h3 className={styles.card_heading}> Проекты бэкенд</h3>
       <p>Из 3 проектов, frontend сделан только у одного (по запросу могу предоставить ссылки на github проектов)</p>
        <Link className={styles.link} to="/kupipodariday">
          <div>"Купи-Подари-Дай"</div>
        </Link>
        </div>
        <div className={styles.card}>
        <h3 className={styles.card_heading}> Fullstack проект</h3>
        <Link className={styles.link} to="/tech-and-dev">
          <div>"Технология и разработка"</div>
        </Link>
        </div>
        </div>
    </main>
  );
};
