<?php require 'meta.php'; ?>
	<link rel="stylesheet" href="../style/news.css">
	<title>Афиша</title>
<?php require 'header.php'; ?>
	<div class="news-block">
		<h1 class="first-block"><span>Афиша</span></h1>
		<div class="content">
			<?php 
				$blocks = get_all_afish();

				while ($myrow = mysql_fetch_array($blocks)) { ?>

					<div class="flex-container">
						<div>
							<div>
								<h2><?php echo $myrow['title']?></h2>
								<p data-cut><?php echo $myrow['text']?></p>
								<a href="afish-page.php?q=<?php echo $myrow['id']?>">Подробнее...</a>
								<footer><i class="far fa-clock"></i> <?php echo $myrow['date']?></footer>
							</div>
						</div>
						<img src='../<?php echo $myrow['img']?>' alt="img">
					</div>

				<?php }
			 ?>
	</div>

	<script src="../script/script.js"></script>
<?php require 'footer.php'; ?>