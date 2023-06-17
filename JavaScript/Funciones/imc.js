//Formula: imc = peso /(altura ^ 2)

function imc(peso, altura) {
    return peso / (altura ** 2);
}

let imcCalculo = imc(49.7, 1.62);

console.log("Tu IMC es: " + imcCalculo);