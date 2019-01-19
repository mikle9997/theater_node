<?php 
	require '../../db/db.php';
	$id = $_GET['q'];

	delete_afish($id);