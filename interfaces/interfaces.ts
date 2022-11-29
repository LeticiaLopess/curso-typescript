interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) { // mostra pessoa com o atributo nome (na const pessoa tem, se fosse meuNome: 'João', daria erro)
    console.log('Olá, ' + pessoa.nome )
}

function mudarNome (pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true,})
pessoa.saudar('Skywalker')

// Usando Classes...

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// para evitar repetição de definição de tipo, criamos uma interface e na definição do tipo do nome, onde antes em ambos era string, agora utilizamos uma única interface Humano que define o tipo de todos os nomes 

/* function saudarComOla(pessoa: { nome: Humano }) { 
console.log('Olá, ' + pessoa.nome ) */

// se uma classe implementa uma interface, essa classe precisa respeitar o que foi definido na interface 


// interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a ) 
}

console.log(potencia(2,10))
console.log(Math.pow(2, 10))
console.log(2 ** 10)

