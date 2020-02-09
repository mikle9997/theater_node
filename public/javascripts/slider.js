let currentSlide = 0

const changeSlide = number => {

    currentSlide = number

    let titles = document.querySelectorAll('.about-title')
    let texts = document.querySelectorAll('.about-block')
    let dots = document.querySelectorAll('.dots span')

    let offsetTitle, offsetText
    switch (number) {
        case 0:
            offsetTitle = 0
            offsetText = -200
            break
        case 1:
            offsetTitle = -100
            offsetText = -100
            break
        default:
            offsetTitle = -200
            offsetText = 0
    }

    titles.forEach(title => {
        title.style['transform'] = `translateX(${offsetTitle}%)`
        offsetTitle += 100;
    })

    texts.forEach(text => {
        text.style['transform'] = `translateX(${offsetText}%)`
        offsetText += 100;
    })

    dots.forEach(dot => {
        dot.classList.remove("active")
    })
    dots[currentSlide].classList.add("active")
}