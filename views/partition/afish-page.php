<?php require 'meta.php'; 

  $id = $_REQUEST['q'];
	$myrow = mysql_fetch_array(get_afish($id));

?>
	<link rel="stylesheet" href="../style/afish-page.css">
	<title><?php echo $myrow['title']?></title>
<?php require 'header.php'; ?>
	<div class="afish-page-wrapper">
		<div class="afish-page">
			<h1><?php echo $myrow['title']?><br><span><i class="far fa-clock"></i> <?php echo $myrow['date']?></span></h1>
			<div class="afish-image">
				<img src="../<?php echo $myrow['img']?>" alt="img">
			</div>
			<p><?php echo $myrow['text']?></p>
		</div>
	</div>

	<script src="../script/script.js"></script>
<?php require 'footer.php'; ?>