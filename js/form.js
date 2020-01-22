var addBot = document.querySelector("#adicionar-paciente");

addBot.addEventListener("click", function (event) {

    event.preventDefault();
    // esse método reseta, previni o efeito do botão de recarregar e limpar a página
    // para que seja executado só o comendo descrito em código
    
    var form = document.querySelector('#form-adiciona');
    // extraindo info do patient do form
    var patient = pacienteDoForm(form)
    // cria TR e TD do patient   
    var patientTr = createTr(patient)
    // adicionando o patient na table
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);
});

function pacienteDoForm(form) {

    var patient = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return patient
}

function createTr(patient) {

    var patientTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = patient.nome;
    pesoTd.textContent = patient.peso;
    alturaTd.textContent = patient.altura;
    gorduraTd.textContent = patient.gordura;
    imcTd.textContent = patient.imc;

    patientTr.appendChild(nomeTd);
    patientTr.appendChild(pesoTd);
    patientTr.appendChild(alturaTd);
    patientTr.appendChild(gorduraTd);
    patientTr.appendChild(imcTd);

    return patientTr
}

/*  conceito de função anônima
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