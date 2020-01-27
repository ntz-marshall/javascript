var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest()

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes")
    
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText
            var patients = JSON.parse(resposta)
            patients.forEach(function (patient) {
                addPatientOnTable(patient)
            })
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            var erroAjax = document.querySelector('#erro-ajax')
            erroAjax.classList.remove('invisible')
        }
    })
    
    xhr.send()

})