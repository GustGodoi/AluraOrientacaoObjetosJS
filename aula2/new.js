// New serve para criamos instâncias para criar objetos

// Classes em Javascript são declaradas com a primeira letra Maiuscula
function User(nome, email) {

    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// Modo de criar objetos com o New
// const novoUser = new User('Juliana', 'j@j.com')
// console.log(novoUser.exibirInfos());

// Modo de criar obejtos com o create
// function Admin(role) {
//     User.call(this, 'Juliana', 'j@j.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

// const user = {
//     init: function(nome, email) {
//         this.nome = nome
//         this.email = email
//     },

//     exibirInfos: function(nome) {
//         return this.nome, this.email
//     }
// }

// const novoUser = Object.create(user)
// novoUser.init('Jiliana', 'j@j.com')
// console.log(novoUser.exibirInfos())
// console.log(user.isPrototypeOf(novoUser))

