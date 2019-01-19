<?php 
	require '../../db/db.php';
	$id = $_GET['id'];
	$name = $_GET['name'];
	$img = $_GET['img'];
	$secname = $_GET['secname'];
	$role = $_GET['role'];

	update_actor($id,$name,$img,$secname,$role);