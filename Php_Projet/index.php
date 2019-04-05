<?php
   require 'Personnage.php';

   $junior = new Personnage('Junior');
   $khaly = new Personnage('Khaly');
   #$merlin -> regenerer();
   $junior -> attaque($khaly);
   
   var_dump($junior);
   var_dump($khaly);

   
?>