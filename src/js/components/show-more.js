export const initShowMoreButton = () => {
    // Логика для кнопки "Развернуть"
    const showMoreBtn = document.querySelector('.show-more-btn');
    const brandsSwiper = document.querySelector('.brands-swiper');

    if (!showMoreBtn || !brandsSwiper) return;

    showMoreBtn.addEventListener('click', () => {
        // Переключаем класс активного состояния у сетки
        brandsSwiper.classList.toggle('is-expanded');

        // 👈 ДОБАВЛЯЕМ ЭТУ СТРОКУ: она включает переворот стрелок прямо на кнопке
        showMoreBtn.classList.toggle('is-open');

        // 👈 НАХОДИМ СПАН С ТЕКСТОМ ВНУТРИ КНОПКИ
        const btnText = showMoreBtn.querySelector('.show-more-btn__text');

        if (btnText) {
            if (brandsSwiper.classList.contains('is-expanded')) {
                btnText.textContent = 'Скрыть'; // Меняем только текст, спан со стрелками не пострадает!
            } else {
                btnText.textContent = 'Показать все';
            }
        }
    });
};

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