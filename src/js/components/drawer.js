export function initDrawer() {
    const burgerOpenBtn = document.querySelector('.burger');
    const drawerCloseBtn = document.querySelector('.drawer-burger');
    const drawer = document.querySelector('.drawer');
    // Находим нашу подложку:
    const overlay = document.querySelector('.drawer-overlay');

    // Проверяем, что все элементы существуют на странице, чтобы избежать ошибок
    if (burgerOpenBtn && drawerCloseBtn && drawer) {

        // // Открытие дровера при клике на бургер
        // burgerOpenBtn.addEventListener('click', () => {
        //     drawer.classList.add('is-open');
        // });

        // // Закрытие дровера при клике на крестик/стрелку внутри меню
        // drawerCloseBtn.addEventListener('click', () => {
        //     drawer.classList.remove('is-open');
        // });

        // Передаем (e) и отменяем дефолтное действие браузера
        burgerOpenBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        drawer.classList.add('is-open');
        });

        drawerCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        drawer.classList.remove('is-open');
        });

        // ЗАКРЫТИЕ ПО КЛИКУ НА МИМО МЕНЮ (НА ЗАТЕМНЕНИЕ):
        if (overlay) {
            overlay.addEventListener('click', () => {
                drawer.classList.remove('is-open');
            });
        }
    }
}