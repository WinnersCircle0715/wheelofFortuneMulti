<!DOCTYPE html>
<html lang="en">
<head>
<?php
$default_url = 'https://codecanyon.net/user/demonisblack';

$title = isset($_GET['title']) ? htmlspecialchars($_GET['title'], ENT_QUOTES, 'UTF-8') : '';
$desc  = isset($_GET['desc']) ? htmlspecialchars($_GET['desc'], ENT_QUOTES, 'UTF-8') : '';
$thumb = isset($_GET['thumb']) ? htmlspecialchars($_GET['thumb'], ENT_QUOTES, 'UTF-8') : '';

$url = isset($_GET['url']) ? $_GET['url'] : $default_url;
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    $url = $default_url;
}

$allowed_host = parse_url($default_url, PHP_URL_HOST);
$input_host   = parse_url($url, PHP_URL_HOST);

if ($input_host !== $allowed_host) {
    $url = $default_url;
}

$url = htmlspecialchars($url, ENT_QUOTES, 'UTF-8');
?>

<title><?php echo $title; ?></title>
<meta property="og:title" content="<?php echo $title; ?>" />
<meta property="og:description" content="<?php echo $desc; ?>" />
<meta property="og:image" content="<?php echo $thumb; ?>" />
<meta property="og:url" content="<?php echo $url; ?>" />
</head>

<body>
<script>
window.location.href = "<?php echo $url; ?>";
</script>
</body>
</html>