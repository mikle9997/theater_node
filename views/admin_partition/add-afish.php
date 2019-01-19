<?php require 'header-admin.php'; ?>
	<div class="section-1">
			<ul class="list">
				<li><a href="../index.php"><i class="th-home"></i> Главная</a></li>
				<li class="active"><a href="list.php"><i class="th-edit"></i> Добавление</a></li>
				<li><a href="actors-list.php"><i class="th-group"></i> Актеры</a></li>
				<li><a href="editimg.php"><i class="th-picture"></i> Медиафайлы</a></li>
			</ul>
		</div>
		<div class="section-2" data-page="afish-editing">
			<h2>Добавление записи</h2>
					<form class="f">
						<div class="form">
							<div class="form-el">
									<p>Номер:</p>
								</div>
								<div class="form-el">
									<input type="number" name="id" id="randomIdHolder" disabled autocomplete="off">
								</div>
								<div class="form-el">
									<p>Название:</p>
								</div>
								<div class="form-el">
									<input type="text" name="name" placeholder="Название" autocomplete="off"></input>
								</div>
								<div class="form-el">
									<p>Описание:</p>
								</div>
								<div class="form-el">
									<textarea name="text" placeholder="Описание..." autocomplete="off"></textarea>
								</div>
								<div class="form-el">
									<p>Дата:</p>
								</div>
								<div class="form-el">
									<input type="text" name="date" placeholder="ГГГГ-ММ-ДД" autocomplete="off"></input>
								</div>
								<div class="form-el">
									<p>Картинка:</p>
								</div>
								<div class="form-el">
									<div class="omg">
										<img src="../../">
										<input type="hidden" name="img">
									</div>
								</div>
								<div class="form-el"></div>
								<div class="form-el">
									<label class="file ok" onclick="showImg()">Изменить изображение</label><br><br>
									<input type="button" value="Подтвердить изменения" class="ok" onclick="addAfish()">
								</div>
						</div>
					</form>
		</div>
		<div class="select-img-block">
			<div class="wrapper-img"></div>
			<button onclick="hideImg()"></button>
		</div>

<?php require 'footer-admin.php'; ?>