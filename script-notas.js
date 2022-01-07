function calcular() {
    var txt= window.document.getElementById('text')
    var res= window.document.getElementById('res')
    var nota= Number(txt.value)
        if (nota>=6) {
            res.innerHTML= '<strong>Parabéns, você foi aprovado!</strong>'
        }
        if (nota<6) {
            res.innerHTML= '<strong>Você está de recuperaçaõ. Estude mais!</strong>'
        }
    }