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

    var validWeigth = validedWeigth(weigth);
    var validHeight = validedHeight(height);

    if (!validWeigth) {
        // || funciona como 'ou' dentro da condição diferente do && que funciona como 'e'
        console.log('Peso cadastrado inválido! Por favor verifique!');
        validWeigth = false;
        tdImc.textContent = 'Peso Inválido!';
        patient.classList.add('invalid-patient');
        // add uma classe ao item desejado alterando o estilo usando css
            
    }
    
    if (!validHeight) {

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

        var imc = calcImc(weigth, height);

        tdImc.textContent = imc;

    }
}

function calcImc(weigth, height) {

    var imc = 0

    imc = weigth / (height*height);

    return imc.toFixed(2)

}

function validedWeigth(weigth) {
    if (weigth >= 35 && weigth < 360) {
        return true
    } else {
        return false
    }
}

function validedHeight(height) {
    if (height >= 1.30 && height < 2.30) {
        return true
    } else {
        return false
    }
}