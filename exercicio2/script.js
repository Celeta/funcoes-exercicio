function adicao (num1, num2) {
    const resultado = num1 + num2

    return resultado
}

console.log(adicao(13,22))

const maiorOuIgual = (num3, num4) => {
    const comparacao = num3 >= num4

    return comparacao
}

console.log(maiorOuIgual(15,20))

function parOunao (num5) {
    const ePar = num5 % 2 === 0

    return ePar
}

console.log(parOunao(18))

function salario (salario) {
    const inss = 0.1
    const descontoInss = salario * inss
    const salarioDesconto = salario - descontoInss

    return salarioDesconto
}

console.log(salario(1000))
