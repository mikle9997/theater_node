document.querySelector('.section-2').style['min-height'] = `${window.innerHeight - 40}px`;

let form = document.querySelector('form.f');

function sendAfish() {
	let log = true;
	let id = form['id'].value;
	if (id == '') {
		form['id'].style['border'] = '1px solid #f44';
		log = false;
	}
	let name = form['name'].value;
	if (name == '') {
		form['name'].style['border'] = '1px solid #f44';
		log = false;
	}
	let text = form['text'].value;
	if (text == '') {
		form['text'].style['border'] = '1px solid #f44';
		log = false;
	}
	let date = form['date'].value;
	if (date == '') {
		form['date'].style['border'] = '1px solid #f44';
		log = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		log = false;
	}

	if (log) {
		let xml = new XMLHttpRequest();
		xml.open('GET',`../control/act-e.php?id=${id}&name=${name}&text=${text}&date=${date}&img=${img}&`,true);
		xml.send();
		setTimeout(()=>{
			location.reload();
		},100)
	}
}

function sendActor() {
	let log = true;
	let id = form['id'].value;
	if (id == '') {
		form['id'].style['border'] = '1px solid #f44';
		log = false;
	}
	let name = form['name'].value.split(' ')[0];
	let secname = form['name'].value.split(' ')[1];
	if (name == '' || secname == '') {
		form['name'].style['border'] = '1px solid #f44';
		log = false;
	}
	let role = form['role'].value;
	if (role == '') {
		form['role'].style['border'] = '1px solid #f44';
		log = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		log = false;
	}
	if (log) {
		let xml = new XMLHttpRequest();
		xml.open('GET',`../control/ac-e.php?id=${id}&name=${name}&secname=${secname}&role=${role}&img=${img}&`,true);
		xml.send();
		setTimeout(()=>{
			location.reload();
		},100)
	}
}

function addActor() {
	let log = true;
	let id = form['id'].value;
	if (id == '') {
		form['id'].style['border'] = '1px solid #f44';
		log = false;
	}
	let name = form['name'].value.split(' ')[0];
	let secname = form['name'].value.split(' ')[1];
	if (name == '' || secname == '') {
		form['name'].style['border'] = '1px solid #f44';
		log = false;
	}
	let role = form['role'].value;
	if (role == '') {
		form['role'].style['border'] = '1px solid #f44';
		log = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		log = false;
	}
	if (log) {
		let xml = new XMLHttpRequest();
		xml.open('GET',`../control/ac-a.php?id=${id}&name=${name}&secname=${secname}&role=${role}&img=${img}&`,true);
		xml.send();
		location.assign('../view/actors-list.php');
		setTimeout(()=>{
			location.reload();
		},100)
	}
}

function addAfish() {
	let log = true;
	let id = form['id'].value;
	if (id == '') {
		form['id'].style['border'] = '1px solid #f44';
		log = false;
	}
	let name = form['name'].value;
	if (name == '') {
		form['name'].style['border'] = '1px solid #f44';
		log = false;
	}
	let text = form['text'].value;
	if (text == '') {
		form['text'].style['border'] = '1px solid #f44';
		log = false;
	}
	let date = form['date'].value;
	if (date == '') {
		form['date'].style['border'] = '1px solid #f44';
		log = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		log = false;
	}

	if (log) {
		let xml = new XMLHttpRequest();
		xml.open('GET',`../control/act-a.php?id=${id}&name=${name}&text=${text}&date=${date}&img=${img}&`,true);
		xml.send();
		location.assign('../view/list.php');
		setTimeout(()=>{
			location.reload();
		},100)
	}
}

function deleteAfish(id) {
	let xml = new XMLHttpRequest();
	xml.open('GET',`../control/delete-afish.php?q=${id}`,true);
	xml.send();
	setTimeout(()=>{
		location.reload();
	},100)
}

function deleteActor(id) {
	let xml = new XMLHttpRequest();
	xml.open('GET',`../control/delete-actor.php?q=${id}`,true);
	xml.send();
	setTimeout(()=>{
		location.reload();
	},100)
}

function cutText(el) {
	if (el.innerHTML.length > 80) {
		let text = el.innerHTML;
		el.innerHTML = '';
		for (let i = 0; i < 80; i++) {
			el.innerHTML += text[i];
		}
		el.innerHTML += '...';
	}
}

document.querySelectorAll('p[data-cut]').forEach(c=>{
	cutText(c);
})

document.querySelectorAll('input').forEach(i=>{
	i.addEventListener('click',()=>{
		i.style['border'] = '1px solid #ccc';
	})
})
document.querySelectorAll('textarea').forEach(t=>{
	t.addEventListener('click',()=>{
		t.style['border'] = '1px solid #ccc';
	})
})

let img = document.querySelector('.select-img-block');
let wrap = document.querySelector('.select-img-block .wrapper-img');
function showImg() {
	img.style['display'] = 'flex';
	let xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      wrap.innerHTML = this.responseText;
    }
  };
	xml.open('GET',`../control/allimages.php`,true);
	xml.send();
}
function hideImg() {
	img.style['display'] = 'none';
}

function chooseImg(img) {
	let a = img.getAttribute('src').split('/');
	console.log(a[a.length-2] + '/' + a[a.length-1],a)
	form['img'].value = a[a.length-2] + '/' + a[a.length-1];
	document.querySelector('.omg img').setAttribute('src','../../' + a[a.length-2] + '/' + a[a.length-1]);

	hideImg();
}

function deleteIMG() {
	let images = form['image'];
	images.forEach(i=>{
		if (i.checked) {
			let xml = new XMLHttpRequest();
			xml.open('GET',`../control/deleteIMG.php?q=${i.value}`,true);
			xml.send();
			setTimeout(()=>{
				location.reload();
			},100)
		}
	})
}

let imgup = document.querySelector('.upload-img-block');
function showUp() {
	imgup.style['display'] = 'flex';
}
function hideUp() {
	imgup.style['display'] = 'none';
}

function randomId() {
	let element = document.querySelector('#randomIdHolder');
	if (element != null)
		element.value = Math.floor(Math.random() * 900000 + 100000);
}
randomId();