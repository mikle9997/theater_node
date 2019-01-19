<?php 
	$q = $_GET['q'];

	$myfile = fopen('targetdir.txt','w');
	fwrite($myfile, $q);
	fclose($myfile);