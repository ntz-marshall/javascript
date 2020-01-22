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

    var errors = validPatient(patient)
    
    if (errors.length > 0) {
        errorMsgs(errors)
        return
    }

    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(patientTr);

    form.reset();
    var ul = document.querySelector('#msg-erro')
    ul.innerHTML = ''
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
    patientTr.classList.add('paciente');

    patientTr.appendChild(createTd(patient.nome, 'info-nome'));
    patientTr.appendChild(createTd(patient.peso, 'info-peso'));
    patientTr.appendChild(createTd(patient.altura, 'info-altura'));
    patientTr.appendChild(createTd(patient.gordura, 'info-gordura'));
    patientTr.appendChild(createTd(patient.imc, 'info-imc'));

    return patientTr
}

function createTd(data, classe) {

    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);

    return td;
}

function validPatient(patient) {

    var errors = []
    if (patient.nome.length == 0) errors.push('O nome não pode ser em branco!')
    
    if (!validedWeigth(patient.peso)) errors.push('Peso é inválido!')

    if (!validedHeight(patient.altura)) errors.push('A altura é inválida!')
    
    if (patient.gordura.length == 0) errors.push('A gordura não pode ser em branco!')

    return errors
}

function errorMsgs(errors) {
    var ul = document.querySelector('#msg-erro')
    ul.innerHTML = ''

    errors.forEach(function(errors){
        var li = document.createElement('li')
        li.textContent = errors
        ul.appendChild(li)
    })
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