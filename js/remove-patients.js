var table = document.querySelector('table')

table.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    },500)
    
})