// 1. Импортируем стили (если Webpack настроен на импорт стилей через JS)
import './../scss/style.scss';

// 2. Импортируем функции из наших модулей
import { initDrawer } from './components/drawer';
// import { initSwiper } from './components/swiper'; // пример на будущее

// 3. Ждем загрузки DOM и запускаем всё разом
document.addEventListener('DOMContentLoaded', () => {
    initDrawer();

    // initSwiper(); // пример на будущее
});


// import '../scss/style.scss'

// console.log('It works!')
