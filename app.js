function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    
    var valorEmRealNumerico = valorEmDolarNumerico * 0.000073
    console.log(valorEmRealNumerico)
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Eth é " + valorEmRealNumerico
    elementoValorConvertido.innerHTML = valorConvertido
  }