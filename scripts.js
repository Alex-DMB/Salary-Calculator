function calcular() {
    var reais = `R$`
    var reaisDesconto = ` - R$`

    var valorHora = document.querySelector('.valorHora').value

    var horasTrabalhadasMes = document.querySelector(
        '.horasTrabalhadasMes'
    ).value

    var salarioBruto = parseInt(valorHora) * parseInt(horasTrabalhadasMes)

    var impostoRenda = (salarioBruto / 100) * 11

    var inss = (salarioBruto / 100) * 8

    var sindicato = (salarioBruto / 100) * 5

    var desconto = impostoRenda + inss + sindicato

    var salarioLiquido = salarioBruto - desconto

    document.querySelector('.salarioBruto').innerHTML =
        reais + salarioBruto.toFixed(2)
    document.querySelector('.impostoRenda').innerHTML =
        reaisDesconto + impostoRenda.toFixed(2)
    document.querySelector('.inss').innerHTML = reaisDesconto + inss.toFixed(2)
    document.querySelector('.sindicato').innerHTML =
        reaisDesconto + sindicato.toFixed(2)
    document.querySelector('.salarioLiquido').innerHTML =
        reais + salarioLiquido.toFixed(2)
}
