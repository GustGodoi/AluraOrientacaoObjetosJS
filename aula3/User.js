// Sintax de classes em JavaScript

export default class User {
    // as '#' fazem com que o atributo da classe seja restrito,
    // podendo ser alterado somente por dentro da própria classe
    
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }
}
