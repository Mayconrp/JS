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