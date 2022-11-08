const leftbtn = document.querySelector('.leftbtn');
const rightbtn = document.querySelector('.rightbtn');
const slider = document.querySelector('.slider')
const img = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

const slidesNum = img.length
let currSlide = 0
for (let index = 0; index < slidesNum; index++) {
    const element = document.createElement('div');
    bottom.insertAdjacentElement('afterbegin', element)
    element.className = 'button'

}
const btns = document.querySelectorAll('.button')
console.log(btns)
btns[currSlide].classList.add('active')

const resetbtn = () => {
    Array.from(btns).forEach(i => {
        i.classList.remove('active')
    })
    btns[currSlide].classList.add('active')
}


leftbtn.addEventListener('click', () => {
    (currSlide === 0) ? (currSlide = slidesNum - 1) : currSlide--;
    slider.style.transform = `translateX(-${currSlide * 800}px)`
    resetbtn()
})

rightbtn.addEventListener('click', () => {
    (currSlide < slidesNum - 1) ? currSlide++ : currSlide = 0;
    slider.style.transform = `translateX(-${currSlide * 800}px)`
    resetbtn()
})

btns.forEach((ele, i) => ele.addEventListener('click', () => {
    currSlide = i
    slider.style.transform = `translateX(-${currSlide * 800}px)`
    resetbtn()
}))

