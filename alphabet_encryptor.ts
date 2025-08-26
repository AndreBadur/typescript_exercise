const chave = 2
const valor = 'frase com espaços'
const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','ç']

const valorEmCaracteres = valor.split('')
let valorCriptografado = ['']

valorEmCaracteres.map((caractere) => {
    valorCriptografado.push(caractereCriptografado(caractere))
})

function caractereCriptografado(caractere) {
    
    if (caractere === ' ') {
        return ' '
    }

    alfabeto.indexOf(caractere)

    let caractereCriptografado
    if (alfabeto.indexOf(caractere) + chave > 27) {
        const indiceZerado = (alfabeto.indexOf(caractere) + chave) - 27
        caractereCriptografado = alfabeto[indiceZerado]
    } else {
        caractereCriptografado = alfabeto[alfabeto.indexOf(caractere) + chave]
    }

    return caractereCriptografado
}

let valorDescriptografado = ['']
valorCriptografado.map((caractere) => {
    if (caractere !== '') {
        valorDescriptografado.push(caractereDescriptografado(caractere))
    }
})

function caractereDescriptografado(caractere) {
    if (caractere === ' ') {
        return ' '
    }

    alfabeto.indexOf(caractere)

    let caractereDescriptografado

    if (alfabeto.indexOf(caractere) - chave < 0) {
        const indiceMaximizado = (alfabeto.indexOf(caractere) - chave) + 27
        caractereDescriptografado = alfabeto[indiceMaximizado]
    } else {
        caractereDescriptografado = alfabeto[alfabeto.indexOf(caractere) - chave]
    }

return caractereDescriptografado
}

console.log(valor)
console.log(valorCriptografado.join(''))
console.log(valorDescriptografado.join(''))
