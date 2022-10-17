import { double } from "./js/tools.js";
let x;
x = 3;
//x="pepe";
x = null;
//if(x)
if (x)
    console.log(double(x));
//Inferencia de tipos
let z = 92;
//z ="pepe" ERROR
//SIN INFERENCIA DE TIPOS
//Mala practica. TIPO ANY
let w;
w = 45;
w = "pepe";
//
