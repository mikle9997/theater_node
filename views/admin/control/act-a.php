<?php 
	require '../../db/db.php';
	$id = $_GET['id'];
	$name = $_GET['name'];
	$img = $_GET['img'];
	$text = $_GET['text'];
	$date = $_GET['date'];

	add_afish($id,$name,$img,$text,$date);