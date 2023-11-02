let numeros = document.querySelector("input#num")
let nums = document.querySelector("select#nums")
let result = document.querySelector("div#res")
let valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}
function add() {
    if (isNumero(numeros.value) && !inLista(numeros.value, valores)) {
        let item = document.createElement("option")
        valores.push(Number(numeros.value))
        item.text = `Valor ${numeros.value} adicionado.`
        nums.appendChild(item)
    } else{
        window.alert("Erro, valor inválido ou já está na lista")
    }
}
function finalizar() {
    let soma = valores.reduce(function(a, b) {
        return a + b;
    })
    let media = valores.reduce(function(a, b) {
        return (a + b) / valores.length;
    })
    result.innerHTML += `Ao todo temos ${valores.length} números cadastrados` + "<br><br>" 
    result.innerHTML += `O maior valor informado foi ${Math.max(...valores)}` + "<br><br>"
    result.innerHTML += `O menor valor informado foi ${Math.min(...valores)}` + "<br><br>"
    result.innerHTML += `Somando todos os valores, temos ${soma}` + "<br><br>"
    result.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}` + "<br><br>"
}