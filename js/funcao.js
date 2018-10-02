//pesquisar algo no document 
//console.log("fui carregado");
var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiroPaciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var Altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var pesoValido = true;
var alturaValida = true;
if(peso < 0 || peso > 1000){
    alert("Peso Invalido");
    pesoValido = false;
}

if(Altura < 0 || Altura > 2,5){
    alert("Peso Invalido");
    alturaValida = false;    
}

if(peso && Altura){
var imc = peso/(Altura*Altura);
tdImc.textContent = imc;
    }