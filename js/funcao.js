
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

// escutar evento / função chamada direto do addEventListener
//titulo.addEventListener("click", function() {
//   console.log(" olha função anônima! ");

    var botaoAdicionar =  document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function (event) {
        // evitar comportamentos padrões como enviar um form atualizando a página
        event.preventDefault();
        
        var formulario = document.querySelector("#formAdiciona");
        var nome = formulario.nome.value;  // observar as ordens
        var peso = formulario.peso.value;
        var altura = formulario.altura.value;
        var gordura = formulario.gordura.value;

        var pacienteTr = document.createElement("tr");

        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(pacienteTr);

});










