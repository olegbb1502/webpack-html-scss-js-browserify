import '../css/style.scss';

// CAROUSEL
const slidesContainer = document.querySelector('#slides-container');
const slides = slidesContainer.querySelectorAll('.slide');
const prevButton = document.querySelector('#arrow-prev');
const nextButton = document.querySelector('#arrow-next');

let currentSlideIndex = 0;

nextButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex >= slides.length-1) {
        slidesContainer.scrollLeft = 0;
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
        slidesContainer.scrollLeft += slideWidth;
    }
});

prevButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex <= 0) {
        slidesContainer.scrollLeft += slides[0].clientWidth * slides.length;
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
        slidesContainer.scrollLeft -= slideWidth;
    }
});

const checkLoop = (index) => {
    console.log(index);
}

// TABS

const tabsContainer = document.querySelector('.tabs-container');
const tabsButtons = tabsContainer.querySelectorAll('.tabs-buttons');
const tabs = tabsContainer.querySelectorAll('.tab');

const tabsHandler = (event) => {
    tabsContainer.querySelectorAll('.tabs-buttons li').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
    const tabContentId = event.target.getAttribute("data-tabId");
    tabs.forEach(item => item.classList.remove('active'));
    tabsContainer.querySelector(`#${tabContentId}`).classList.add('active');
}

tabsButtons.forEach(button => {
    button.addEventListener('click', tabsHandler)
})

// POPUP window

const popupOpenButton = document.querySelector('.popup-section button');
const popupCloseButton = document.querySelector('#close-popup');
const popupWindow = document.querySelector('.popup-container');

const togglePopupClass = () => popupWindow.classList.toggle('active')

popupOpenButton.addEventListener('click', togglePopupClass)
popupCloseButton.addEventListener('click', togglePopupClass)