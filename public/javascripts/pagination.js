var curSl = 1;
var pag = document.querySelectorAll('.pagination span:not([data-pag])');
var fill = [
	document.querySelector('.content').innerHTML,
	'<div class="flex-container"><div><div><h2>Статья о стенах и креслах</h2><p>Представляете, сегодня мы узнали, что кресла нашего зала не одинаковые. Более того, наши стены делали какие-то криворукие рабочие, поэтому они такие не красивые.</p><a href="#">Подробнее...</a><footer><i class="far fa-clock"></i> 12/04/2018</footer></div></div><img src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img"></div><div class="flex-container"><div><div><h2>Отравление - заговор или случайность</h2><p>Кажется, что завтрак у наших балерин был не очень свежий, поэтому у всех них болит живот. Нельзя не учитывать версию намеренной диверсии, но мы надеемся на лучшее.</p><a href="#">Подробнее...</a><footer><i class="far fa-clock"></i> 06/04/2018</footer></div></div><img src="https://images.pexels.com/photos/11437/dance-scene-free-license-cc0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img"></div>'
];

function changeSlide(n) {
	curSl += n;
	showSlide();
}

function currentSlide(n) {
	curSl = n;
	showSlide();
}

function showSlide() {
	if (curSl < 1) {
		curSl = fill.length;
	} else if (curSl > fill.length) {
		curSl = 1;
	}
	document.querySelector('.content').innerHTML = fill[curSl-1];
	pag.forEach( obj => {
		obj.classList.remove('active-pag');
	})
	pag[curSl-1].classList.add('active-pag')
}