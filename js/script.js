function countTriangleBase() {
    const baseValues = document.querySelector('.base').value;
    const highValues = document.querySelector('.high').value;
    const result = 1 / 2 * baseValues * highValues;

    if (baseValues > 0 && highValues > 0) {
        return document.querySelector('.result__bases').innerHTML = `Luas segitiga tersebut adalah ${result}`
    } else {
        alert('Angka yang anda masukkan kurang dari 0 dan tidak boleh kosong!');
    }

}

function countTriangleAround() {
    const sideValues = document.querySelector('.side').value;
    const result = 3 * sideValues;

    if (sideValues > 0) {
        return document.querySelector('.result__arounds').innerHTML = `Keliling segitiga tersebut adalah ${result}`;
    } else {
        alert('Angka yang anda masukkan kurang dari 0 dan tidak boleh kosong!');
    }

}