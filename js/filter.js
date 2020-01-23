var filter = document.querySelector('#table-filter')

filter.addEventListener('input', function() {
    var patients = document.querySelectorAll('.paciente')
    if (this.value.length > 0) {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i]
            var tdNome = patient.querySelector('.info-nome')
            var nome = tdNome.textContent
            var exp = new RegExp(this.value,'i')
            if (!exp.test(nome)) {
                patient.classList.add('invisible')
            } else {
                patient.classList.remove('invisible')
            }
        }
    } else {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i]
            patient.classList.remove('invisible')
        }
    }
    
})