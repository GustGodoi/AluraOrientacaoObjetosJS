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

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não esperado.')
        }
        this.#nome = novoNome
    }

    set email(novoEmail) {
        this.#email = novoEmail
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento
    }

    set role(novaRole) {
        this.#role = novaRole
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }

    // função restrita de exemplo, criada junto de '#'
    // #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}
