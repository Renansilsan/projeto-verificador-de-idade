function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var imge = window.document.getElementById('imge')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('{ERRO} verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-homem.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            }
            else if (idade >=21 && idade < 65) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        }
        else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-mulher.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }
            else if (idade >=21 && idade < 65) {
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)

    }
}