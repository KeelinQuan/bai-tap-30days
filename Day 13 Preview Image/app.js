var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')

upload.addEventListener('change', function (e) {
    var file = upload.file[0];
    if (!file) return;

    if (file.name.endsWith('.jpg')) {
        error.innerHTML = `Hinh anh phai dinh dang la jpg`
        return;
    } else {
        error.innerHTML = ``;
    }

    if (file.size / (1024 * 1024) > 10) {
        error.innerHTML = `Chi duoc upload hinh anh duoi 10MB `
        return;
    } else {
        error.innerHTML = ``;
    }
    consolelog(file);

    var img = document.createElement('img')
    img.src = URL.createObjectURL(upload.file[0])
    preview.appendChild

})