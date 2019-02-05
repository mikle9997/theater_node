let colBtn = document.querySelector('#collapse-menu-button')
let colMenu = document.querySelector('#resp-menu')
let opCir = document.querySelector('#opening-circle')
let checkVar = [false, false]
let lastPoint
let page = document.querySelector('body').getAttribute('data-page')
let scrollProgress = document.querySelector('#scroll-progress')
let header = document.querySelector('.header')
let headerLink = document.querySelectorAll('.header a')

function openMenu() {
	if (checkVar[0]) {
			colMenu.style['display'] = 'none'
			opCir.style['transform'] = 'translate(50%,-50%) scale(0,0)'
			document.querySelector('.logo-block').style['background-color'] = 'transparent'
			if (!(checkVar[1])) {
				document.querySelector('.logo-block a').style['color'] = '#eee'
				colBtn.style['color'] = '#eee'
			}
			colBtn.innerHTML = '<span>≡</span>'
			document.querySelector('body').style['overflow'] = 'auto'
			checkVar[0] = false
		} else {
			colMenu.style['display'] = 'flex'
			opCir.style['transform'] = 'translate(50%,-50%) scale(1,1)'
			document.querySelector('.logo-block').style['background-color'] = 'rgba(255,255,255,0.9)'
			document.querySelector('.logo-block a').style['color'] = '#333'
			colBtn.style['color'] = '#333'
			colBtn.innerHTML = '<span>✖</span>'
			document.querySelector('body').style['overflow'] = 'hidden'
			checkVar[0] = true
		}
}

document.addEventListener("DOMContentLoaded", () => {
	colMenu.innerHTML = document.querySelectorAll('.menu')[0].innerHTML

	colBtn.addEventListener('click', openMenu)
	document.querySelectorAll('#resp-menu .menu-el').forEach( obj => {
		obj.addEventListener('click', openMenu)
	});

	document.querySelectorAll('.animating').forEach( obj => { Visible(obj) })

	// извлекает текст описания новости и преобразует сбитые кодировкой переносы строк в тег <br>
	if (document.querySelector('.description'))
		document.querySelector('.description').innerHTML = document.querySelector('.description')
		.innerHTML.replace(/&lt;br&gt;/g, '<br>')
})

window.addEventListener('scroll', scrolling)

function scrolling() {
	if (page == 'index') {
		if ((document.querySelector('.first-block').getBoundingClientRect().bottom <= 0)
			&& (window.pageYOffset < lastPoint)) {
			openMenuS()
			scrollProgress.style['top'] = '52px'
			scrollProgress.style['transition'] = '.3s'
		} else {
			header.style['position'] = 'absolute'
			header.style['background-color'] = 'transparent'
			headerLink.forEach( obj => {
				obj.style['color'] = '#fff'
			})
			colBtn.style['color'] = '#eee'
			if (document.querySelector('.first-block').getBoundingClientRect().bottom <= 0) {
				header.style['top'] = '-52px'
			}
			checkVar[1] = false
			scrollProgress.style['top'] = 0
			scrollProgress.style['transition'] = '0s'
		}}

	lastPoint = window.pageYOffset

	document.querySelectorAll('.animating').forEach( obj => { Visible(obj) })

	scrollProgress.style['width'] = (window.pageYOffset
		/ (document.body.scrollHeight - window.innerHeight)) * window.innerWidth + 'px'
}

function openMenuS() {
	header.style['position'] = 'fixed'
	header.style['background-color'] = '#fff'
	headerLink.forEach( obj => {
		obj.style['color'] = '#333'
	})
	colBtn.style['color'] = '#333'
	header.style['top'] = 0
	checkVar[1] = true
}

function Visible(target) {
 let targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
  windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };
	if (targetPosition.bottom > windowPosition.top &&
	  targetPosition.top < windowPosition.bottom &&
	  targetPosition.right > windowPosition.left &&
	  targetPosition.left < windowPosition.right) {
		target.style['transition'] = '.5s'
		setTimeout(() => {
			target.style['opacity'] = 1
			target.style['transform'] = 'scale(1,1)'
		}, 300)
}};

document.querySelectorAll('.card-img').forEach( c =>{
	var src = c.getAttribute('data-src')
	c.style['background-image'] = `url(${src})`
})
