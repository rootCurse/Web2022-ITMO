const f = document.querySelector('#create__table');
f.addEventListener('submit', function(evt){
    evt.preventDefault();
    const wrapper = document.querySelector('div.wrapper');
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let data = new FormData(f);
    wrapper.innerHTML = `<div class='table__title'>` + data.get('table__title') + `</div>`;
    wrapper.innerHTML += `<grid class='table' id = 'table'></grid>`;
    let templ = document.querySelector("#template__table_column");
    let gap = '';
    for(let i = 0; i < data.get('days'); i++){
        let newNode = document.importNode(templ.content, true);
        newNode.querySelector('h3.column__title').textContent = week[i];
        table.appendChild(newNode);
        gap += '1fr ';
    }
    formInput = `<div class="parent__popup_invisible"><form id="form__input" name="form__input" class="form__input_invisible"><input type="text" name="task__title" id="task__title" placeholder="Name of your task"></input><button type="submit" id="create__task">Create task</button></form></div>`
    wrapper.innerHTML += formInput;
    table.style.gridTemplateColumns = gap;
    localStorage.clear();
    localStorage.setItem('table__title', data.get('table__title'))
    localStorage.setItem('table__days', data.get('days'))
});
