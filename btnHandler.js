document.addEventListener('click', function(evt){
    if(evt.target.matches('.btn__add')){
        evt.preventDefault();
        let input = document.querySelector('#form__input');
        let popup = document.querySelector('div.parent__popup_invisible');
        popup.className = "parent__popup_visible";
        let element = evt.target;
        input.addEventListener('submit', function(evt_sub){
            evt_sub.preventDefault();
            let data = new FormData(input);
            if (data.get('task__title') === ''){
                popup.className = "parent__popup_invisible";
                return;
            }
            let container = element.parentElement.parentElement;
            let templ = document.querySelector("#template__table_task");
            let newNode = document.importNode(templ.content, true);
            newNode.querySelector('.task__name').textContent = data.get('task__title');
            container.appendChild(newNode);
            popup.className = "parent__popup_invisible";
        })
    }
    if(evt.target.matches('.btn__delete')) {
        evt.preventDefault();
        evt.target.parentElement.remove();
    }
})