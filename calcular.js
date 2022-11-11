// Cuadrado

const ladoCuadrado = document.querySelector('#ladoCuadrado');
const calcularClick = document.querySelector('#calcular');
const resultAreaCuadrado = document.querySelector('#resultadoAreaCua');
const resultPerimetroCuadrado = document.querySelector('#resultadoPerimetroCua');

// Rectangulo

const ladoARect = document.querySelector('#ladoARec')
const ladoBRect = document.querySelector('#ladoBRec')
const resultAreaRectangulo = document.querySelector('#resultadoAreaRec');
const resultPerimetroRectangulo = document.querySelector('#resultadoPerimetroRec');

//Circulo

const radioCirculo = document.querySelector("#radioCir");
const resultAreaCirculo = document.querySelector("#resultadoAreaCir");
const resultPerimetroCirculo = document.querySelector("#resultadoPerimetroCir");


const clickCuadrado = document.addEventListener('mouseup',cuadrado);
const clickRectangulo = document.addEventListener('mouseup',rectangulo);
const clickCirculo = document.addEventListener("mousedown", circulo);


function cuadrado(){
    areaCuadrado = ladoCuadrado.value ** 2;
    resultAreaCuadrado.innerHTML = areaCuadrado;
    perimertoCuadrado = ladoCuadrado.value * 4;
    resultPerimetroCuadrado.innerHTML = perimertoCuadrado;
}


function rectangulo(){
    areaRectangulo = ladoARect.value * ladoBRect.value;
    resultAreaRectangulo.innerHTML = areaRectangulo;
    perimetroRectangulo = ((ladoARect.value * 2) + (ladoBRect.value * 2));
    resultPerimetroRectangulo.innerHTML = perimetroRectangulo;
}

function circulo(){
    areaCirculo = ((radioCirculo.value **2) * Math.PI).toFixed(2);
    resultAreaCirculo.innerHTML = areaCirculo;
    perimetroCirculo = (2 * radioCirculo.value * Math.PI).toFixed(2);
    resultPerimetroCirculo.innerHTML = perimetroCirculo;
}










