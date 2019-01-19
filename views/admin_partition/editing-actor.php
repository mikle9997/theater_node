<?php require 'header-admin.php'; 

	$id = $_REQUEST['q'];
	$myrow = mysql_fetch_array(get_actor($id));

?>
	<div class="section-1">
			<ul class="list">
				<li><a href="../index.php"><i class="th-home"></i> Главная</a></li>
				<li><a href="list.php"><i class="th-pin"></i> Записи</a></li>
				<li class="active"><a href="actors-list.php"><i class="th-edit"></i> Изменение</a></li>
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
									<input type="number" name="id" autocomplete="off" value="<?php echo $myrow['id']?>" disabled>
								</div>
								<div class="form-el">
									<p>Имя и фамилия:</p>
								</div>
								<div class="form-el">
									<input type="text" name="name" placeholder="Имя и фамилия" autocomplete="off" value="<?php echo $myrow['name']?> <?php echo $myrow['secname']?>"></input>
								</div>
								<div class="form-el">
									<p>Должность в театре:</p>
								</div>
								<div class="form-el">
									<input type="text" name="role" placeholder="Актер" autocomplete="off" value="<?php echo $myrow['role']?>"></input>
								</div>
								<div class="form-el">
									<p>Фотография:</p>
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
									<input type="button" value="Подтвердить изменения" class="ok" onclick="sendActor()">
								</div>
						</div>
					</form>
		</div>
		<div class="select-img-block">
			<div class="wrapper-img"></div>
			<button onclick="hideImg()"></button>
		</div>

<?php require 'footer-admin.php'; ?>