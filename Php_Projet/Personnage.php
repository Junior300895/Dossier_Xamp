<?php
   class Personnage{
       public $vie = 80;
       public $atk = 20;

       public function __construct($nom){
            $this->nom = $nom;
       }

       public function regenerer(){
           $this->vie = 100;
       }

       public function attaque($cible){
           $cible->vie -= $this->atk;
       }
   }
?>