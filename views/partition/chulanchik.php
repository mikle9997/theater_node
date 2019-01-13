<?php require 'meta.php'; ?>
	<link rel="stylesheet" href="../style/gallery.css">
	<link rel="stylesheet" href="../style/modalIMG.css">
	<title>Галерея</title>
<?php require 'header.php'; ?>

	<div class="gallery">
		<h1 class="first-block"><span>Галерея</span></h1>
		<div class="content-gal">
			<div class="col">
				<?php
					$dir = '../images/';
					$a = scandir($dir);
					for ($i=2; $i < count($a); $i += 3) { ?>
						<div onclick="currentSlide(this)">
							<img src="../images/<?php echo $a[$i]?>" alt="img">
							<p><i class="fas fa-search-plus"></i></p>
						</div>
					<?php }
				?>
			</div>
			<div class="col">
				<?php
					$dir = '../images/';
					$a = scandir($dir);
					for ($i=3; $i < count($a); $i += 3) { ?>
						<div onclick="currentSlide(this)">
							<img src="../images/<?php echo $a[$i]?>" alt="img">
							<p><i class="fas fa-search-plus"></i></p>
						</div>
					<?php }
				?>
			</div>
			<div class="col">
				<?php
					$dir = '../images/';
					$a = scandir($dir);
					for ($i=4; $i < count($a); $i += 3) { ?>
						<div onclick="currentSlide(this)">
							<img src="../images/<?php echo $a[$i]?>" alt="img">
							<p><i class="fas fa-search-plus"></i></p>
						</div>
					<?php }
				?>
			</div>
	</div>
	<div class="modal-img">
		<button onclick="closeModal()">✖</button>
		<div class="img-block">
			<img src="../images/gallery1.jpg" alt="img" onclick="closeModal()">
		</div>
		<div class="prev" onclick="changeSlide(-1)">&#10094;</div>
		<div class="next" onclick="changeSlide(1)">&#10095;</div>
	</div>

	<script src="../script/script.js"></script>
	<script src="../script/modalIMG.js"></script>
<?php require 'footer.php'; ?>