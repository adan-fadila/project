<?php echo $_GET["fname"];
    echo $_GET["Bdate"];
    echo $_GET["gender"];
    echo $_GET["ID"];
    echo $_GET["email"];
    echo $_GET["first"];
    foreach($_GET["diagnosis"] as $value){
        echo $value;
    }
    echo $_GET["send-medical-info"];
    echo $_GET["method"];
    echo $_GET["allergies"];
    echo $_GET["preferFood"];
    echo $_GET["weight"];
    echo $_GET["height"];
    echo $_GET["vegetarian"];
    echo $_GET["comments"];
?>
