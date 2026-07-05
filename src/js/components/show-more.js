/**
 * Универсальный модуль для кнопок "Показать все / Скрыть"
 */
export const initShowMoreButton = () => {
    // Находим ВСЕ кнопки развертывания на странице
    const showMoreButtons = document.querySelectorAll('.show-more-btn');

    // Если на странице нет ни одной такой кнопки — выходим (Защита)
    if (showMoreButtons.length === 0) return;

    showMoreButtons.forEach((btn) => {
        // Находим родительский контейнер секции, в которой лежит эта кнопка
        // Это позволит кнопке управлять СТРОГО своим слайдером (брендов или техники)
        const sectionContainer = btn.closest('.brands-container, .tech-container, section, div');
        if (!sectionContainer) return;

        // Ищем слайдер строго внутри этой же секции
        const targetSwiper = sectionContainer.querySelector('.brands-swiper, .tech-swiper');
        if (!targetSwiper) return;

        // Навешиваем событие клика на каждую кнопку индивидуально
        btn.addEventListener('click', () => {
            // Переключаем классы состояния у конкретного слайдера и кнопки
            targetSwiper.classList.toggle('is-expanded');
            btn.classList.toggle('is-open');

            // Находим спан с текстом строго внутри текущей нажатой кнопки
            const btnText = btn.querySelector('.show-more-btn__text');

            if (btnText) {
                if (targetSwiper.classList.contains('is-expanded')) {
                    btnText.textContent = 'Скрыть';
                } else {
                    btnText.textContent = 'Показать все';
                }
            }
        });
    });
};

// export const initShowMoreButton = () => {
//     // Логика для кнопки "Развернуть"
//     const showMoreBtn = document.querySelector('.show-more-btn');
//     const brandsSwiper = document.querySelector('.brands-swiper');

//     if (!showMoreBtn || !brandsSwiper) return;

//     showMoreBtn.addEventListener('click', () => {
//         // Переключаем класс активного состояния у сетки
//         brandsSwiper.classList.toggle('is-expanded');

//         // 👈 ДОБАВЛЯЕМ ЭТУ СТРОКУ: она включает переворот стрелок прямо на кнопке
//         showMoreBtn.classList.toggle('is-open');

//         // 👈 НАХОДИМ СПАН С ТЕКСТОМ ВНУТРИ КНОПКИ
//         const btnText = showMoreBtn.querySelector('.show-more-btn__text');

//         if (btnText) {
//             if (brandsSwiper.classList.contains('is-expanded')) {
//                 btnText.textContent = 'Скрыть'; // Меняем только текст, спан со стрелками не пострадает!
//             } else {
//                 btnText.textContent = 'Показать все';
//             }
//         }
//     });
// };

// // Логика для кнопки "Развернуть"
// const showMoreBtn = document.querySelector('.show-more-btn');
// const brandsSwiper = document.querySelector('.brands-swiper');

// if (showMoreBtn && brandsSwiper) {
//   showMoreBtn.addEventListener('click', () => {
//     // Переключаем класс активного состояния у сетки
//     brandsSwiper.classList.toggle('is-expanded');

//     // 👈 ДОБАВЛЯЕМ ЭТУ СТРОКУ: она включает переворот стрелок прямо на кнопке
//     showMoreBtn.classList.toggle('is-open');

//     // 👈 НАХОДИМ СПАН С ТЕКСТОМ ВНУТРИ КНОПКИ
//     const btnText = showMoreBtn.querySelector('.show-more-btn__text');

//     if (btnText) {
//       if (brandsSwiper.classList.contains('is-expanded')) {
//         btnText.textContent = 'Скрыть'; // Меняем только текст, спан со стрелками не пострадает!
//       } else {
//         btnText.textContent = 'Показать все';
//       }
//     }
//   });
// }