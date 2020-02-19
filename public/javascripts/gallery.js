const split_into_groups = (arr, n) => {
  arr.sort((a,b) => { return a.height < b.height })
  
  const res     = []
  const res_sum = []
  for (let i = 0; i < n; i++) { res.push([]); res_sum.push(0); }
  
  for (const el of arr) {
    for (let i = 0; i < n; i++) {
      if (i+1 == res.length || res_sum[i] < res_sum[i+1]) {
        res[i].push(el)
        res_sum[i] += el.height
        break
      }
    }
  }
  return res
}

window.addEventListener('load', () => {
	const imgs		  	= document.querySelectorAll('.content-gal img')
	const imgs_height = []

	for (const img of imgs)
		imgs_height.push({src: img.src, height: img.height})

	const img_grid = split_into_groups(imgs_height, 3)

	const content = document.querySelector('.content-gal')
	content.innerHTML = ''
	img_grid.forEach(group => {
		const col = document.createElement('div')
		col.classList.add('col')
		group.forEach(img => {
			col.innerHTML += `<div onclick="currentSlide(this)">
													<img src="${img.src}" alt="img">
													<p>+</p>
												</div>`
		})
		content.appendChild(col)
	})

	
	document.querySelectorAll('.col img').forEach(i=>{
		img.push(i.getAttribute('src'));
	});
})

let img 		= []
let indexSl = undefined;
let space 	= document.querySelector('.modal-img .img-block');
let block 	= document.querySelector('.modal-img');

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

window.addEventListener('keydown', e => {
	if (e.which == 27)
		closeModal()
})