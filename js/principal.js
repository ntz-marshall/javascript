/*  Index.html  */
var tittle = document.querySelector(".title");
tittle.textContent = "Aparecida Nutricionista";
    
var trPatient = document.querySelectorAll('.paciente');

for (var i = 0; i < trPatient.length; i++) {
        
    var patient = trPatient[i];

    var tdWeigth = patient.querySelector('.info-peso');
    var weigth = tdWeigth.textContent;

    var tdHeight = patient.querySelector('.info-altura');
    var height = tdHeight.textContent;
        
    var tdImc = patient.querySelector('.info-imc');

    var validWeigth = true;
    var validHeight = true;

    if (weigth >= 450 || weigth <= 40) {
        // || funciona como 'ou' dentro da condição diferente do && que funciona como 'e'
        console.log('Peso cadastrado inválido! Por favor verifique!');
        validWeigth = false;
        tdImc.textContent = 'Peso Inválido!';
        patient.classList.add('invalid-patient');
        // add uma classe ao item desejado alterando o estilo usando css
            
    }
    
    if (height <= 1.20 || height >= 2.50) {

        console.log('Altura cadastrado inválida! Por favor verifique!');
        validHeight = false;
        tdImc.textContent = 'Altura Inválida!';
        patient.classList.add('invalid-patient');
            
        /* patient.style.background = "red";
        patient.style.color = "white";
        patient.style.fontWeight="bold";
        troca o estilo utilizando o css no js */

    }

    if (validWeigth && validHeight) {

        var imc = weigth / (height*height);

        tdImc.textContent = imc.toFixed(2);

    }
}

var addBot = document.querySelector("#adicionar-paciente");
addBot.addEventListener("click", function (event) {
    event.preventDefault();
    // esse método reseta, previni o efeito do botão de recarregar e limpar a página
    // para que seja executado só o comendo descrito em código
    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var patientTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    patientTr.appendChild(nomeTd);
    patientTr.appendChild(pesoTd);
    patientTr.appendChild(alturaTd);
    patientTr.appendChild(gorduraTd);

    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);


});

/*  conceito de função anonima
    titulo.addEventListener("click", function () {
        console.log("Olha só, sou uma função anonima");
    });

    Quando você cria e chama uma função dentro do evento,
    onde só existe para aquele evento.

    titulo.addEventListener("click", mostraMsg);

    function mostraMsg () {
        console.log("Eu fui clicado!");
    }
*/