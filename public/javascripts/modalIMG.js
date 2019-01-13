var indexSl = undefined;
var space = document.querySelector('.modal-img .img-block');
var block = document.querySelector('.modal-img');
var img = [];
document.querySelectorAll('.col img').forEach(i=>{
	img.push(i.getAttribute('src'));
});

function closeModal() {
	block.style['display'] = 'none';
	document.querySelector('body').style['overflow'] = 'auto';
}

function currentSlide(n) {
	indexSl = n.childNodes[1].getAttribute('src');
	openModal();
}

function changeSlide(n) {
	let j;
	for (let i = 0; i < img.length; i++) 
		if (indexSl == img[i]) j = i;
	j += n;
	if (j == img.length) j = 0;
		if (j == -1) j = img.length-1;
	indexSl = img[j];
	openModal();
}

function openModal() {
	block.style['display'] = 'flex';
	space.innerHTML = `<img src="${indexSl}" alt="img">`;
	document.querySelector('body').style['overflow'] = 'hidden';
}