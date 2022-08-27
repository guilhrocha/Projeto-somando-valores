function somar() {
    var tn1 = document.getElementById('num1')
    var tn2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `o resultado da soma entre ${n1} e ${n2} é ${s}`
}

