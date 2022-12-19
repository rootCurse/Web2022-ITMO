const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function construct(title, days){
    const wrapper = document.querySelector('div.wrapper');
    wrapper.innerHTML = `<div class='table__title'>` + title + `</div>`;
    wrapper.innerHTML += `<grid class='table' id = 'table'></grid>`;
    let templ = document.querySelector("#template__table_column");
    let gap = '';
    for(let i = 0; i < days; i++){
        let newNode = document.importNode(templ.content, true);
        newNode.querySelector('h3.column__title').textContent = week[i];
        table.appendChild(newNode);
        gap += '1fr ';
    }
    formInput = `<div class="parent__popup_invisible"><form id="form__input" name="form__input" class="form__input_invisible"><input type="text" name="task__title" id="task__title" placeholder="Name of your task"></input><button type="submit" id="create__task">Create task</button></form></div>`
    wrapper.innerHTML += formInput;
    table.style.gridTemplateColumns = gap;
}

const f = document.querySelector('#create__table');
f.addEventListener('submit', function(evt){
    evt.preventDefault();
    let data = new FormData(f);
    construct(data.get('table__title'), data.get('days'));
    localStorage.setItem('table__title', data.get('table__title'));
    localStorage.setItem('table__days', data.get('days'));
});

document.querySelector('#table__restore').addEventListener('click', function(){
    construct(localStorage.getItem('table__title'), localStorage.getItem('table__days'));
})
