import React from "react";
import { Link } from "react-router-dom";

import styles from "./main-page.module.css";



export const MainPage = () => {
  return (
    <main className={styles.main}>
        <h1 className={styles.hending}>Краткий обзор проектов</h1>
        <div className={styles.text_box}>
           <p>Ознакомится с резюме вы можете по ссылке: <a className={styles.link} 
           href={'https://spb.hh.ru/resume/d707b0a8ff098fb3220039ed1f42696d6b6f79'}>
          https://spb.hh.ru </a> </p>
           <p>Git акаунт: <a className={styles.link} href="https://github.com/LexorV"> https://github.com</a> </p>
          </div>
        <p className={styles.text_box}> Всего выполнено 9 основных проектов и один на этапе скорого релиза. Ознакомится с кратким содержанием вы сможете по ссылкам ниже:</p>
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
       <p>Выполнено 3 проекта, из трёх проектов, веб-интерфейс сделан только у одного
        (по запросу могу предоставить ссылки на github остальных проектов)</p>
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
