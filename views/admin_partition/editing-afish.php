<?php require 'header-admin.php'; 

	$id = $_REQUEST['q'];
	$myrow = mysql_fetch_array(get_afish($id));

?>
	<div class="section-1">
			<ul class="list">
				<li><a href="../index.php"><i class="th-home"></i> Главная</a></li>
				<li class="active"><a href="list.php"><i class="th-edit"></i> Изменение</a></li>
				<li><a href="actors-list.php"><i class="th-group"></i> Актеры</a></li>
				<li><a href="editimg.php"><i class="th-picture"></i> Медиафайлы</a></li>
			</ul>
		</div>
		<div class="section-2" data-page="afish-editing">
			<h2>Редактирование</h2>
					<form class="f">
						<div class="form">
							<div class="form-el">
									<p>Номер:</p>
								</div>
								<div class="form-el">
									<input type="number" name="id" placeholder="0" autocomplete="off" value="<?php echo $myrow['id']?>" disabled>
								</div>
								<div class="form-el">
									<p>Название:</p>
								</div>
								<div class="form-el">
									<input type="text" name="name" placeholder="Название" autocomplete="off" value="<?php echo $myrow['title']?>"></input>
								</div>
								<div class="form-el">
									<p>Описание:</p>
								</div>
								<div class="form-el">
									<textarea name="text" placeholder="Описание..." autocomplete="off"><?php echo $myrow['text']?></textarea>
								</div>
								<div class="form-el">
									<p>Дата:</p>
								</div>
								<div class="form-el">
									<input type="text" name="date" placeholder="ГГГГ-ММ-ДД" autocomplete="off" value="<?php echo $myrow['date']?>"></input>
								</div>
								<div class="form-el">
									<p>Картинка:</p>
								</div>
								<div class="form-el">
									<div class="omg">
										<img src="../../<?php echo $myrow['img']?>">
										<input type="hidden" name="img" value="<?php echo $myrow['img']?>">
									</div>
								</div>
								<div class="form-el"></div>
								<div class="form-el">
									<label class="file ok" onclick="showImg()">Изменить изображение</label><br><br>
									<input type="button" value="Подтвердить изменения" class="ok" onclick="sendAfish()">
								</div>
						</div>
					</form>
		</div>
		<div class="select-img-block">
			<div class="wrapper-img"></div>
			<button onclick="hideImg()"></button>
		</div>

<?php require 'footer-admin.php'; ?>