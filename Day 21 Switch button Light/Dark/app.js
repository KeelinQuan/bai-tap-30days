var switchBtn = document.querySelector('label');
var body = document.querySelector('body');

function init() {
    let mode = localStorage.getItem('mode');
    body.setAttribute('class', mode) ? "class" : "";
}

init();

switchBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    let mode = body.getAttribute('class') ? "class" : "";
    localStorage.setItem('mode', mode);
})