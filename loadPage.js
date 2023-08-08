var timerStart = Date.now();
function ready() {
    loader.textContent = 'Page load time is ' + (Date.now() - timerStart) / 1000 + ' seconds'
}
      
window.addEventListener("load", ready);