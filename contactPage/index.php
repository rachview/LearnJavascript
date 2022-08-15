<?php include 'sendemail.php';?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page with Coding Snow</title>
    <!-- From  https://cdnjs.com/libraries/font-awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css">
</head>

<!-- alert messages start -->
<!-- <div class="alert-success">
    <span>Message Sent! Thank you for contacting us.</span>
</div> -->
<!-- <div class="alert-error"><span>Sorry, something went wrong. Please try again.</span></div> -->
<?php echo $alert; ?>

<!-- alert messages end -->

<body>
    <!-- contact section start -->
    <div class="contact-section">
        <div class="contact-info">
            <div><i class="fa-solid fa-location-dot"></i>Address, City, Country</div>
            <div><i class="fa-solid fa-envelope"></i>Contact@email.com</div>
            <div><i class="fa-solid fa-phone"></i>1 (000) 000 000</div>
            <div><i class="fa-solid fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
        </div>
        <div class="contact-form">
            <h2>Contact Us</h2>
            <form class="contact" action="" method="post">
                <input type="text" class="text-box" name="name" placeholder="Your Name" required>
                <input type="email" class="text-box" name="email" placeholder="Your Email" required>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <input type="submit" name="submit" class="send-btn" value="Send">
            </form>
        </div>
    </div>
    <!-- contact section end -->

    <script type="text/javascript">
        if(window.history.replaceState){
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
</body>

</html>