var listCounter = document.querySelectorAll('.counter')

function count(element) {

    var numberElement = element.querySelector('.number')
    var to = parseInt(numberElement.innerText)
    var count = 0;
    var time = 100;
    var step = to / time;

    let counting = setInterval(() => {
        count += step;
        if (count > to) {
            clearInterval(counting)
            numberElement.innerText = to;
        } else {
            numberElement.innerText = Math.round(count)
        }
    }, 1);
}

listCounter.forEach(item => {
    count(item);
});