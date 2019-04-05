<?php

require 'form.php';
    $form = new Form(array(
        'username1' => 'Roger',
        'username2' => 'Junior'
    ));
    #$form->surround = 'br';
    echo $form -> input('username1');
    echo $form -> input('username2');
    echo $form -> input('password');
    echo $form -> submit();