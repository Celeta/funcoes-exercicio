function adicao (num1, num2) {
    const mais = num1 + num2

    return mais
}

function subtracao (num1, num2) {
    const menos = num1 - num2

    return menos
}

function multi (num1, num2) {
    const vezes = num1 * num2

    return vezes
}

function div (num1, num2){
    const barra = num1 / num2

    return barra
}

let num1 = Number (prompt ("Digite um número..."))
let num2 = Number (prompt ("Digite outro número..."))

console.log(adicao(num1,num2))
console.log(subtracao(num1,num2))
console.log(multi(num1,num2))
console.log(div(num1,num2))









