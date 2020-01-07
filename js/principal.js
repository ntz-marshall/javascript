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