<?php require 'header-admin.php'; ?>
	<div class="section-1">
			<ul class="list">
				<li><a href="../index.php"><i class="th-home"></i> Главная</a></li>
				<li><a href="list.php"><i class="th-pin"></i> Записи</a></li>
				<li><a href="actors-list.php"><i class="th-group"></i> Актеры</a></li>
				<li class="active"><a href="editimg.php"><i class="th-picture"></i> Медиафайлы</a></li>
			</ul>
		</div>
		<div class="section-2">
			<h2>Редактирование медиафайлов</h2>
			<form class="f">
				<input type="button" class="file ok" value="Добавить изображение" onclick="showUp()">
				<p class="note">Выберите картинки для удаления</p>
				<input type="button" value="Удалить" class="danger" onclick="deleteIMG()">
				<input type="reset" class="reset">
				<div class="folder">
					<h3><i class="th-folder"></i> Папка images</h3>
					<hr>
				</div>
				<div class="row">
					<div class="col-25">
						<?php
						$dir = '../../images/';
						$a = scandir($dir);
						for ($i=2; $i < count($a); $i += 4) { ?>
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="images/<?php echo $a[$i]?>">
									<img src="../../images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
						<?php }
					?>
					</div>
					<div class="col-25">
						<?php
						$dir = '../../images/';
						$a = scandir($dir);
						for ($i=3; $i < count($a); $i += 4) { ?>
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="images/<?php echo $a[$i]?>">
									<img src="../../images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
						<?php }
					?>
					</div>
					<div class="col-25">
						<?php
						$dir = '../../images/';
						$a = scandir($dir);
						for ($i=4; $i < count($a); $i += 4) { ?>
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="images/<?php echo $a[$i]?>">
									<img src="../../images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
						<?php }
					?>
					</div>
					<div class="col-25">
						<?php
						$dir = '../../images/';
						$a = scandir($dir);
						for ($i=5; $i < count($a); $i += 4) { ?>
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="images/<?php echo $a[$i]?>">
									<img src="../../images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
						<?php }
					?>
					</div>
				</div>
				<div class="folder">
					<h3><i class="th-folder"></i> Папка actor-images</h3>
					<hr>
				</div>
				<div class="row">
					<div class="col-25">
					<?php
						$dir = '../../actors-images/';
						$a = scandir($dir);
						for ($i=2; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="actors-images/<?php echo $a[$i]?>">
									<img src="../../actors-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../actors-images/';
						$a = scandir($dir);
						for ($i=3; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="actors-images/<?php echo $a[$i]?>">
									<img src="../../actors-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../actors-images/';
						$a = scandir($dir);
						for ($i=4; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="actors-images/<?php echo $a[$i]?>">
									<img src="../../actors-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../actors-images/';
						$a = scandir($dir);
						for ($i=5; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="actors-images/<?php echo $a[$i]?>">
									<img src="../../actors-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
				</div>
				<div class="folder">
					<h3><i class="th-folder"></i> Папка afish-images</h3>
					<hr>
				</div>
				<div class="row">
					<div class="col-25">
					<?php
						$dir = '../../afish-images/';
						$a = scandir($dir);
						for ($i=2; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="afish-images/<?php echo $a[$i]?>">
									<img src="../../afish-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../afish-images/';
						$a = scandir($dir);
						for ($i=3; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="afish-images/<?php echo $a[$i]?>">
									<img src="../../afish-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../afish-images/';
						$a = scandir($dir);
						for ($i=4; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="afish-images/<?php echo $a[$i]?>">
									<img src="../../afish-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
					<div class="col-25">
					<?php
						$dir = '../../afish-images/';
						$a = scandir($dir);
						for ($i=5; $i < count($a); $i += 4) { ?>
					
						  <div class="img">
								<label>
									<input type="checkbox" name="image" value="afish-images/<?php echo $a[$i]?>">
									<img src="../../afish-images/<?php echo $a[$i]?>">
									<span class="checkmark"></span>
									<p><?php echo $a[$i]?></p>
								</label>
							</div>
					
						<?php }
					?>
					</div>
				</div>
			</form>
		</div>
		<div class="upload-img-block">
			<button onclick="hideUp()"></button>
			<div class="wrapper-img">
				<h3>Выберите папку:</h3><br>
				<select id="folderselect">
					<option value="images">images</option>
					<option value="afish-images">afish-images</option>
					<option value="actors-images">actors-images</option>
				</select>
				<label class="file ok"><input type="file" id="sortpicture">Выбрать изображение</label>
				<input id="upload" value="Загрузить" class="ok" type="button">
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script>
			$('#upload').on('click', function() {
			  let file_data = $('#sortpicture').prop('files')[0];
			  let form_data = new FormData();
			  form_data.append('file', file_data);
			  let xml = new XMLHttpRequest();
				xml.open('GET',`../control/changedir.php?q=${$('#folderselect').val()}`,true);
				xml.send();
			  $.ajax({
			    url: '../control/upload.php',
			    dataType: 'text',
			    cache: false,
			    contentType: false,
			    processData: false,
			    data: form_data,
			    type: 'post'
			  });
			  setTimeout(()=>{
					location.reload();
				},100)
			});
		</script>
<?php require 'footer-admin.php'; ?>