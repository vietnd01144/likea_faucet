<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>LIKEA FAUCET</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../media/css/bootstrap.min.css">
    <link rel="stylesheet" href="../media/css/common.css">
    <link rel="stylesheet" href="../media/css/common.css">
    <link rel="stylesheet" href="../media/css/left-sidebar.css">
    <link rel="stylesheet" href="../media/css/main-page.css">
    <link rel="stylesheet" href="../media/css/header.css">
    <link rel="stylesheet" href="../media/css/chat-main.css">
</head>

<body>
    <section class="container-fluid">
        <section class="wrapper row">
            <div class="col-2 px-0">
                <?php include_once '../layout/left-sidebar.php'; ?>
            </div>
            <section class="main-container col-10">
                <div class="row">
                    <?php include_once '../layout/header.php'; ?>
                    <div class="col-9">
                        <?php include_once '../layout/main.php'; ?>
                    </div>
                    <div class="col-3 right-chat">
                        <?php include_once '../layout/chat-main.php'; ?>
                    </div>
                </div>
            </section>
        </section>
    </section>
<?php include_once '../layout/bottom.php'; ?>