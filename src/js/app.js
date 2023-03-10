/*
!(i)
Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ====================================================================================================================================================
*  документация: https://michalsnik.github.io/aos
*/
// AOS.init();
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================

/* Открытие/закрытие модальных окон ====================================================================================================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// ====================================================================================================================================================

try {
  const btnMore = document.querySelector('.header__more-btn');
  const contentMore = document.querySelector('.header__menu');

  btnMore.addEventListener('click', () => {
    if (contentMore.classList.contains('header__menu--active')) {
      contentMore.classList.remove('header__menu--active');
      btnMore.classList.remove('header__more-btn--active');
      contentMore.style.zIndex = '-1'
    } else {
      contentMore.classList.toggle('header__menu--active');
      btnMore.classList.toggle('header__more-btn--active');
      setTimeout( () => {
        contentMore.style.zIndex = '10'
      }, 300)
    }
  });
} catch(e){}




// card

try {
  function cardsBtns () {

    const btnGrid = document.querySelector('.cards__button-grid');
    const btnLine = document.querySelector('.cards__button-line');
    const cardContent = document.querySelector('.cards__content');

      btnGrid.addEventListener('click', () => {
        cardContent.style.opacity = '0';
        cardContent.classList.remove('cards__content-line');
        btnLine.classList.remove('cards__button--active');
        btnGrid.classList.add('cards__button--active');

        setTimeout( () => {
          cardContent.style.opacity = '1';
        }, 200);
      });

      btnLine.addEventListener('click', () => {
        cardContent.style.opacity = '0';
        cardContent.classList.add('cards__content-line');
        btnLine.classList.add('cards__button--active');
        btnGrid.classList.remove('cards__button--active');

        setTimeout( () => {
          cardContent.style.opacity = '1';
        }, 200);
      });
    }

    cardsBtns();
} catch(e){}


// vacansy card=========

try{



const vacansyCads = () => {
  const btnInvitations = document.querySelector('.persona-vacancies__tabs-btn-invitations');
  const btnActive = document.querySelector('.persona-vacancies__tabs-btn-active');
  const btnArchive = document.querySelector('.persona-vacancies__tabs-btn-archive');

  const contentInvitations = document.querySelector('.persona-vacancies__tab-content-invitations');
  const contentActive = document.querySelector('.persona-vacancies__tab-content-active');
  const contentArchive = document.querySelector('.persona-vacancies__tab-content-archive');

  const btnActiveClass = 'persona-vacancies__tabs-btn--active';
  const contentActiveClass = 'persona-vacancies__tab-content--active';

  btnInvitations.addEventListener('click', () => {
    btnInvitations.classList.add(btnActiveClass);
    btnActive.classList.remove(btnActiveClass);
    btnArchive.classList.remove(btnActiveClass);

    contentInvitations.classList.add(contentActiveClass);
    contentActive.classList.remove(contentActiveClass);
    contentArchive.classList.remove(contentActiveClass);

  });

  btnActive.addEventListener('click', () => {
    btnInvitations.classList.remove(btnActiveClass);
    btnActive.classList.add(btnActiveClass);
    btnArchive.classList.remove(btnActiveClass);

    contentInvitations.classList.remove(contentActiveClass);
    contentActive.classList.add(contentActiveClass);
    contentArchive.classList.remove(contentActiveClass);
  });

  btnArchive.addEventListener('click', () => {
    btnInvitations.classList.remove(btnActiveClass);
    btnActive.classList.remove(btnActiveClass);
    btnArchive.classList.add(btnActiveClass);

    contentInvitations.classList.remove(contentActiveClass);
    contentActive.classList.remove(contentActiveClass);
    contentArchive.classList.add(contentActiveClass);
  });




};

vacansyCads();


} catch(e){}



// const circle = document.querySelector('.circle-progress');
//     const circleRadius = circle.r.baseVal.value;
//     const circumference = 2 * Math.PI * circleRadius;
//     const circlePercent = document.querySelector('.circle-percent');
//     let count = 0;

//     circle.style.strokeDasharray = `${circumference} ${circumference}`;
//     circle.style.strokeDashoffset = circumference;
//     console.log(circumference)

//     function setProgress(percent) {

//         const offsetCount = setInterval(() => {
//             if(circle.style.strokeDashoffset >= circumference) {
//                 clearInterval(offsetCount);
//             } circle.style.strokeDashoffset -= 1;
//               circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;

//             circlePercent.innerHTML = count + '%';
//             if (count >= percent) {
//                 clearInterval(offsetCount)
//             }
//             count += 1;
//         }, 100)
//     };
//     setProgress(50);