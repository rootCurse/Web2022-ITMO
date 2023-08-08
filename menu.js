document.addEventListener("DOMContentLoaded", function() {
    var Menu = document.querySelectorAll('#menu a');
    var path = window.location.href;
    for (let el of Menu) {
        var href = el.href;
        if(path == href){
            el.classList.add("menu__link_active")
        }
        else{
            if(el.classList.contains("menu__link_active")){
                el.classList.remove("menu__link_active")
            }
        }
    }
})
