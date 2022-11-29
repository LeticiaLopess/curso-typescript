// string

let nome = 'João'
// melhor -> let nome: string = 'João'
console.log(nome)
// nome = 28
// Como você atribuiu uma string à variável let, se você der uma informação com outro tipo, será detectado erro.

// numbers

let idade = 27
// melhor -> let idade: number = 27 
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean

let possuiHobbies = false
// melhor -> let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)
// se eu rodar com o "possuiHobbies = 1", irá mostra o valor 1 a não ser que eu use uma característica do compilador para que não retorne um resultado quando houver erro.

// tipos explícitos

let minhaIdade
minhaIdade = 27
// minhaIdade = any (pode ser uma string, array, number...)
// nesse caso eu não tenho um number, tenho um tipo dinâmico
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'

// Ao criar a variável sem definição de tipo e sem inicializar a variável, significa que essa variável será tratada dentro do TypeScript do tipo "n".

// array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"] // array de strings
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)
// o any faz aceitar qualquer tipo de informação dentro do array
// hobbies = [100] -> array de number, dará erro pois está sendo lido como string, mas esse problema é resolvido quando eu defino o tipo do array como "any[]".

// tuplas = Array de tipos de uma quantidade pré-definida.

let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)
// cada informação deve corresponder à posição de tipo informada.

// enums = estrutura que define valores pré-definidos. ex: dias da semana (não é didático aparecer como 1,2,3...)
enum Cor {
    Cinza, // 0 
    Verde = 100, // 1
    Azul = 10, // 2 
    Laranja,
    Amarelo,
    Vermelho = 100
}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
// como o Verde = 100, automaticamente o Azul será = 101

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano:2019 }
console.log(carro)