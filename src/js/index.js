// 1. Импортируем стили (если Webpack настроен на импорт стилей через JS)
import './../scss/style.scss';

// 2. Импортируем функции из наших модулей
import { initDrawer } from './components/drawer';
import { initBrandsSwiper } from './components/brands-swiper'; // пример на будущее
import { initTechSwiper } from './components/tech-swiper'; // 👈 Добавляем импорт
import { initShowMoreButton } from './components/show-more';

// 3. Ждем загрузки DOM и запускаем всё разом
document.addEventListener('DOMContentLoaded', () => {
    initDrawer();
    initBrandsSwiper(); // пример на будущее
    initTechSwiper(); // 👈 Запускаем слайдер техники
    initShowMoreButton();
});


// import '../scss/style.scss'

// console.log('It works!')
