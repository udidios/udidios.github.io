<?php
$name_file = "device.mobileconfig";
$file = fopen($name_file, "r");
header("Content-type: application/x-apple-aspen-config; chatset=utf-8");
header("Content-Disposition: attachment; filename=\"$name_file\"");
echo fread($file,filesize($name_file));
?>
