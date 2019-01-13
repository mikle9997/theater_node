<?php require 'meta.php'; ?>
	<link rel="stylesheet" href="../style/trupe.css">
	<title>Труппа</title>
<?php require 'header.php'; ?>
	<div class="actors-wrapper">

		<?php 
				$blocks = get_all_actors();

				while ($myrow = mysql_fetch_array($blocks)) { ?>

					<div class="actor-card">
						<div class="card-img" data-src='../<?php echo $myrow['img'] ?>'></div>
						<p><?php echo $myrow['name'] ?> <?php echo $myrow['secname'] ?></p>
						<p><?php echo $myrow['role'] ?></p>
					</div>

				<?php }
			 ?>

	</div>

	<script src="../script/script.js"></script>
<?php require 'footer.php'; ?>