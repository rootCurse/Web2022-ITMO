document.addEventListener('click', function(evt){
    if(evt.target.matches('.btn__add')){
        evt.preventDefault();
        var element = evt.target;
        var result = prompt('Введите название', 'unknown');
        if (result === null) return;
        var container = element.parentElement.parentElement;
        task = `<div class='task__name'>` + result + `</div>`
        container.innerHTML += `<div class = 'task'> ` + task + `<button class='btn__delete'></button></div>`;
    }
    if(evt.target.matches('.btn__delete')) {
        evt.preventDefault();
        evt.target.parentElement.remove();
    }
})