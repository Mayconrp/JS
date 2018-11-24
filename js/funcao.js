

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// querySelectorAll traz uma lista ou seja um array de algo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length ; i++){
    
    //pega a lista de pacientes 
    var paciente = pacientes[i];

// query selector traz algum elemento, apenas um elemento
    var tdPeso = paciente.querySelector(".info-peso");

    // textContent acessa conteúdo de texto
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var Altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;

    if(peso < 0 || peso >= 1000){
        console.log("Peso Inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!" ;
        // acessando o css 
        paciente.classList.add("paciente-invalido");
    }

    if(Altura <= 0 || Altura >= 3.00){
        console.log("Altura Invalida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!" ;
        // acessando o css 
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
    var imc = peso/(Altura*Altura);
    tdImc.textContent = imc.toFixed(2);
    }
}

