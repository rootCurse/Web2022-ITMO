const f = document.querySelector('#create__table');
f.addEventListener('submit', function(evt){
    evt.preventDefault();
    const m = document.querySelector('main');
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let data = new FormData(f);
    m.innerHTML = `<div class='table__title'>` + data.get('table__title') + `</div>`;
    let content = `<grid class='table' id = 'table'>`;
    let gap = '';
    for(let i = 0; i < data.get('days'); i++){
        content += `<div class = 'grid__element'><div class='grid__element_title'><h3>`+ week[i] + `</h3><button class='btn__add'></button></div></div>`;
        gap += '1fr ';
    }
    content += `</div>`;
    m.innerHTML += content;
    table.style.gridTemplateColumns = gap;
});