// // Импортируем ядро Swiper
// import Swiper from 'swiper';
// // Импортируем СТРОГО только те модули, которые используем (для оптимизации бандла Webpack)
// import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';

// СТРОГО НИКАКИХ ИМПОРТОВ! Swiper уже загружен в window из HTML через <script cdn...>

// Глобальная переменная модуля для хранения экземпляра слайдера
let swiperInstance = null;
let resizeTimeout = null;

// /**
//  * Функция создания или уничтожения слайдера в зависимости от ширины экрана
//  * @param {HTMLElement} sliderEl - корневой элемент слайдера
//  * Функция создания или уничтожения слайдера в зависимости от ширины экрана (CDN-версия)
//  */
const handlePricesSwiperResponsive = (sliderEl) => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Если мы на мобилке и слайдер еще не создан — создаем
    if (swiperInstance === null) {
      // Пользуемся глобальным конструктором Swiper
      swiperInstance = new Swiper(sliderEl, {
        // // Подключаем импортированные модули
        // modules: [Pagination, Keyboard, Mousewheel],

        // Строка modules: [...] УБРАНА! В CDN все модули активны из коробки
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16, 

        pagination: {
          el: '.prices-swiper .main-pagination',
          type: 'bullets',
          clickable: true,
        },

        mousewheel: {
          invert: true,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      });
    }
  } else {
    // Если мы ушли на планшет/ПК и слайдер существует — уничтожаем его
    // На планшетах и ПК уничтожаем слайдер
    if (swiperInstance !== null) {
      // destroy(deleteInstance, cleanStyles) -> true, true полностью чистит DOM и инлайновые стили
      swiperInstance.destroy(true, true); // Полностью зачищаем DOM и инлайновые стили
      swiperInstance = null;
      
      // Гарантированно зачищаем transform на wrapper, который Swiper мог не успеть удалить при резком ресайзе
      const wrapperEl = sliderEl.querySelector('.prices-swiper__wrapper');
      if (wrapperEl) {
        wrapperEl.style.transform = '';
      }
    }
  }
};

/**
 * Главная точка входа модуля (Экспорт функции инициализации)
 * Главная точка входа модуля для CDN
 */
export const initPricesSwiper = () => {
  const sliderEl = document.querySelector('.prices-swiper');
  
  // Guard Clause (Защита): если элемента нет на текущей странице, скрипт молча завершает работу
  // Защита от падения скрипта, если слайдера нет на странице
  if (!sliderEl) return;

  // Первичная проверка при загрузке страницы
  // Запуск при старте
  handlePricesSwiperResponsive(sliderEl);

  // Оптимизированный слушатель ресайза через Debounce (тайминг)
  // Защищает систему от сотен вызовов в секунду при растягивании окна браузера
  // Оптимизированный слушатель ресайза через Debounce (тайминг 150мс)
  window.addEventListener('resize', () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
      handlePricesSwiperResponsive(sliderEl);
    }, 150); // 150мс — золотой стандарт задержки, незаметный глазу
  });
};



// let swiperInstance = null;

// function initOrDestroySwiper() {
//   const sliderEl = document.querySelector('.brands-swiper');
//   if (!sliderEl) return;

//   // Слайдер работает ТОЛЬКО до 767px включительно
//   if (window.innerWidth < 768) {
//     if (swiperInstance === null) {

//       // Ищем главный контейнер слайдера
//       swiperInstance = new Swiper(sliderEl, {
//         direction: 'horizontal',
//         loop: true,
//         // freeMode: true,
//         slidesPerView: 'auto',
//         spaceBetween: 16, // Отступы только здесь!
//         // Отключаем любые многорядные костыли Swiper, так как на мобилке у нас чистая лента
//         grid: false, 

//         //   freeMode: {
//         //     enabled: true,
//         //     sticky: true,
//         //   },

//         pagination: {
//           el: '.brands-swiper .main-pagination',
//           type: 'bullets',
//           clickable: true,
//         },

//         mousewheel: {
//           invert: true,
//         },

//         keyboard: {
//           enabled: true,
//           onlyInViewport: false,
//         },
//       });
//     }
//   }

//   // От 768px и выше — полностью уничтожаем слайдер
//   else {
//     if (swiperInstance !== null) {
//       swiperInstance.destroy(true, true);
//       swiperInstance = null;

//       // Принудительно очищаем инлайновый стиль transform, который Swiper мог оставить на wrapper
//       const wrapperEl = sliderEl.querySelector('.brands-swiper__wrapper');
//       if (wrapperEl) {
//         wrapperEl.style.transform = '';
//       }
//     }
//   }
// }

// // Экспортируем единую функцию инициализации модуля
// export const initBrandsSwiper = () => {
//   // Инициализация при старте и ресайзе
//   initOrDestroySwiper();

//   // Оптимизированный ресайз через таймаут
//   // Оптимизированный ресайз (вызываем функцию только когда пользователь закончил менять размер)
//   let resizeTimeout;
//   window.addEventListener('resize', () => {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(initOrDestroySwiper, 100);
//   });
//   // Ресайз в реальном времени, может грузить систему
//   // window.addEventListener('resize', initOrDestroySwiper);
// };



