<?php
	$dir = file('targetdir.txt');

  if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['file']['error'];
  }
  else {
    move_uploaded_file($_FILES['file']['tmp_name'], '../../'.$dir[0].'/' . $_FILES['file']['name']);
    echo 'All is ok.Dir: '.$dir[0];
  }