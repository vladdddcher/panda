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





try {
  const inputShow = () => {
    const fixedInput = document.querySelector('.fixed-input');
    const salaryHide = document.querySelectorAll('.salary-hide');
    const salaryFixed = document.querySelector('.salary-fixed');
    const salaryFixedRadio = document.querySelector('.salary-fixed-radio')
  
    salaryHide.forEach(function(item) {
      fixedInput.addEventListener('click', () => {
        if (fixedInput.checked) {
          salaryFixed.style.display = 'block'
          salaryFixedRadio.style.display = 'block'
          item.style.display = 'none'
          
        } else {
          salaryFixed.style.display = 'none'
          salaryFixedRadio.style.display = 'none'
          item.style.display = 'block'
        }
      })
    })
    
    
  
  };
  
  inputShow()
} catch(e) {}






import dropDown from './modules/dropdown';
import formValidator from './modules/formValidator';
import counterSymbols from './modules/counterSymbols';
import rangeSliders from './modules/range-slider';
import tabs from './modules/tabs';
import showHidePassword from './modules/showHidePassword';



// 1- родитель всех табов, 2- сам таб, 3 - родитель всего контента,  4 - активный класс для кнопки

try {tabs('.persona-vacancies__tabs', '.persona-vacancies__tabs-btn', '.persona-vacancies__tab-content', 'persona-vacancies__tabs-btn--active');} catch(e) {};
try {tabs('.my-profile__tabs', '.my-profile__tabs-btn', '.my-profile__tabs-content', 'my-profile__tabs-btn--active', 'block');} catch(e) {};
// try {tabs('.persona-account__tabs', '.persona-account__tab', '.persona-account__tabs-content', 'persona-account__tab--active');} catch(e) {};




try {showHidePassword()} catch(e){};
  

  
  
try { counterSymbols(); } catch(e){};

try { dropDown(); } catch(e){};

try { formValidator(); } catch(e){};

try { rangeSliders();} catch(e) {};















