const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

burgerMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});


// Скрипт для таймера
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0; // Остановка таймера при достижении нуля
        }
    }, 1000);
}


// Слайдер
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentItem = 0;

    function showItem(index) {
        // Скрыть все элементы карусели
        carouselItems.forEach(item => {
            item.style.display = 'none';
        });

        // Показать текущий элемент карусели
        carouselItems[index].style.display = 'block';
    }

    // Показать первый элемент при загрузке страницы
    showItem(currentItem);

    // Функция для переключения элементов карусели
    function nextItem() {
        currentItem++;
        if (currentItem >= totalItems) {
            currentItem = 0; // Вернуться к первому элементу, если достигнут конец
        }
        showItem(currentItem);
    }

    function prevItem() {
        currentItem--;
        if (currentItem < 0) {
            currentItem = totalItems - 1; // Перейти к последнему элементу, если достигнут начало
        }
        showItem(currentItem);
    }

    // Переключение элементов при клике на стрелки
    document.querySelector('.carousel-prev').addEventListener('click', prevItem);
    document.querySelector('.carousel-next').addEventListener('click', nextItem);
});


// Мигание цены при загрузке страницы и запуск таймера
window.onload = function () {
    const thirtyMinutes = 60 * 30; // 30 минут в секундах
    const displayTimer = document.querySelector('#timer');
    const sumElement = document.querySelector('.sum');

    // Запуск таймера
    startTimer(thirtyMinutes, displayTimer);

    // Мигание цены
    sumElement.classList.add('blink');
};


