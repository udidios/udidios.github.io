<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>UDID</title>
<meta name="viewport" content="width=device-width" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js" integrity="sha256-FiZwavyI2V6+EXO1U+xzLG3IKldpiTFf3153ea9zikQ=" crossorigin="anonymous"></script>
</head>
<body>
<div>
<h1>UDID of my iOS device</h1>
<p>UDID: <div id="udid"><?php echo $_GET['UDID']; ?></div></p>
<button class="btn" data-clipboard-text="<?php echo $_GET['UDID']; ?>">
Copy UDID
</button>
<p>Device product: <?php echo $_GET['DEVICE_PRODUCT']; ?></p>
</div>
</body>
<script>
new ClipboardJS('.btn');
</script>
</html>
