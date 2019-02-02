document.querySelector('.section-2').style['min-height'] = `${window.innerHeight - 40}px`;

let form = document.querySelector('form.f');

function addActor() {
	let correct = true;

	let name = form['name'].value.split(' ')[0];
	let secname = form['name'].value.split(' ')[1];
	if (name == '' || secname == '') {
		form['name'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let role = form['role'].value;
	if (role == '') {
		form['role'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		correct = false;
	}

	if (correct) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST',`/admin/actors/add`);
		let data = 	"name=" + name +
					"&secname=" + secname +
					"&role=" + role +
					"&img=" + img;

		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.addEventListener('load', function(event) {
			location.assign('/admin/actors');
		});
		xhr.addEventListener('error', function(event) {
			alert('Что-то пошло не так. Молитва должна излечить недуг.');
		});

		xhr.send(data);
	}
}

function editActor() {
	let correct = true;
	let id = form['id'].value;
	if (id == '') {
		correct = false;
	}
	let name = form['name'].value.split(' ')[0];
	let secname = form['name'].value.split(' ')[1];
	if (name == '' || secname == '') {
		form['name'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let role = form['role'].value;
	if (role == '') {
		form['role'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		correct = false;
	}

	if (correct) {
		let xhr = new XMLHttpRequest();
		xhr.open('PUT',`/admin/actors/edit`);
		let data = 	"id=" + id +
					"&name=" + name +
					"&secname=" + secname +
					"&role=" + role +
					"&img=" + img;

		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.addEventListener('load', function(event) {
			location.assign('/admin/actors');
		});
		xhr.addEventListener('error', function(event) {
			alert('Что-то пошло не так. Молитва должна излечить недуг.');
		});

		xhr.send(data);
	}
}

function deleteActor(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE',`/admin/actors`);
	let data = 	"id=" + id;

	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.addEventListener('load', function(event) {
		location.reload();
	});
	xhr.addEventListener('error', function(event) {
		alert('Что-то пошло не так. Молитва должна излечить недуг.');
	});

	xhr.send(data);
}

function addNews() {
	let correct = true;


	let name = form['name'].value;
	if (name == '') {
		form['name'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let author = form['author'].value;
	if (author == '') {
		form['author'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let text = form['text'].value;
	if (text == '') {
		form['text'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let date = form['date'].value;
	if (date == '') {
		form['date'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let time = form['time'].value;
	if (time == '') {
		form['time'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let duration = form['duration'].value;
	if (duration == '') {
		form['duration'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let place = form['place'].value;
	if (place == '') {
		form['place'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let producer = form['producer'].value;
	if (producer == '') {
		form['producer'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let choreographer = form['choreographer'].value;
	if (choreographer == '') {
		form['choreographer'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let actors = form['actors'].value;
	if (actors == '') {
		form['actors'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		correct = false;
	}

	if (correct) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST',`/admin/news/add`);
		let data = 	"name=" + name +
					"&author=" + author +
					"&text=" + text +
					"&date=" + date +
					"&time=" + time +
					"&duration=" + duration +
					"&place=" + place +
					"&producer=" + producer +
					"&choreographer=" + choreographer +
					"&actors=" + actors +
					"&img=" + img;

		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.addEventListener('load', function(event) {
			location.assign('/admin/news');
		});

		xhr.addEventListener('error', function(event) {
			alert('Что-то пошло не так. Молитва должна излечить недуг.');
		});

		xhr.send(data);
	}
}

function editNews() {
	let correct = true;

	let id = form['id'].value;
	if (id == '') {
		correct = false;
	}
	let name = form['name'].value;
	if (name == '') {
		form['name'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let author = form['author'].value;
	if (author == '') {
		form['author'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let text = form['text'].value;
	if (text == '') {
		form['text'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let date = form['date'].value;
	if (date == '') {
		form['date'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let time = form['time'].value;
	if (time == '') {
		form['time'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let duration = form['duration'].value;
	if (duration == '') {
		form['duration'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let place = form['place'].value;
	if (place == '') {
		form['place'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let producer = form['producer'].value;
	if (producer == '') {
		form['producer'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let choreographer = form['choreographer'].value;
	if (choreographer == '') {
		form['choreographer'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let actors = form['actors'].value;
	if (actors == '') {
		form['actors'].style['border'] = '1px solid #f44';
		correct = false;
	}
	let img = form['img'].value;
	if (img == '') {
		alert('Выберите изображение');
		correct = false;
	}

	if (correct) {
		let xhr = new XMLHttpRequest();
		xhr.open('PUT',`/admin/news/edit`);
		let data = 	"id=" + id +
					"&name=" + name +
					"&author=" + author +
					"&text=" + text +
					"&date=" + date +
					"&time=" + time +
					"&duration=" + duration +
					"&place=" + place +
					"&producer=" + producer +
					"&choreographer=" + choreographer +
					"&actors=" + actors +
					"&img=" + img;

		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.addEventListener('load', function(event) {
			location.assign('/admin/news');
		});
		xhr.addEventListener('error', function(event) {
			alert('Что-то пошло не так. Молитва должна излечить недуг.');
		});

		xhr.send(data);
	}
}

function deleteNews(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE',`/admin/news`);
	let data = 	"id=" + id;

	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.addEventListener('load', function(event) {
		location.reload();
	});
	xhr.addEventListener('error', function(event) {
		alert('Что-то пошло не так. Молитва должна излечить недуг.');
	});

	xhr.send(data);
}

function cutText( el ) {
	if ( el.innerHTML.length > 80 ) {
		let text = el.innerHTML;
		el.innerHTML = '';
		for ( let i = 0; i < 80; i++ ) {
			el.innerHTML += text[i];
		}
		el.innerHTML += '...';
	}
}

document.querySelectorAll( 'p[data-cut]' ).forEach( c => {
	cutText(c);
})

document.querySelectorAll( 'input' ).forEach( i => {
	i.addEventListener( 'click', () => {
		i.style['border'] = '1px solid #ccc';
	})
})
document.querySelectorAll( 'textarea' ).forEach(t=>{
	t.addEventListener( 'click', () => {
		t.style['border'] = '1px solid #ccc';
	})
})

let img = document.querySelector( '.select-img-block' );
let wrap = document.querySelector( '.select-img-block .wrapper-img' );

function showImg() {
	img.style['display'] = 'flex';
	let xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		wrap.innerHTML = this.responseText;
		}
  	};
	xml.open('GET',`/admin/all-images`,true);
	xml.send();
}

function hideImg() {
	img.style['display'] = 'none';
}

function chooseImg(img) {
	let img_src = img.getAttribute('src');
	form['img'].value = img_src;
	document.querySelector('.omg img').setAttribute('src', img_src);

	hideImg();
}

function chooseImgForEditMedia( img ) {
	let img_src = img.getAttribute('src');
	form['image'].value = img_src;
	document.querySelector('.img').setAttribute('src', img_src);
}

function deleteIMG() {
	let images = form['image'];
	images.forEach( item => {
		if (item.checked) {
			let xhr = new XMLHttpRequest();

			xhr.open('DELETE',`/admin/imgs`);
			let data = 	"id=" + item.value;

			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.addEventListener('load', function(event) {
				location.reload();
			});
			xhr.addEventListener('error', function(event) {
				alert('Что-то пошло не так. Молитва должна излечить недуг.');
			});

			xhr.send(data);
		}
	});

	document.querySelector('.reset').click()
}

let imgup = document.querySelector('.upload-img-block');
function showUp() {
	imgup.style['display'] = 'flex';
}
function hideUp() {
	imgup.style['display'] = 'none';
}
