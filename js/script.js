function hitungLuasSegitiga() {
    const alas = document.querySelector('#alas');
    const tinggi = document.querySelector('#tinggi');
    const alasValue = alas.value || 0;
    const tinggiValue = tinggi.value || 0;

    const luasSegitiga = 1 / 2 * alasValue * tinggiValue;

    document.querySelector('.results').innerHTML = `Hasil dari 1 / 2 x ${alasValue} x ${tinggiValue} adalah  ${luasSegitiga}`;
}

function hitungKelilingSegitiga() {
    const sisi = document.querySelector('#sisi');
    const sisiValue = sisi.value || 0;
    
    const kelilingSegitiga = 3 * sisiValue;

    document.querySelector('.results').innerHTML = `Hasil dari 3 x ${sisiValue} adalah ${kelilingSegitiga}`
}