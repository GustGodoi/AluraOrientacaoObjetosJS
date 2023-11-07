import User from './aula3/User.js';
import Admin from './aula3/Admin.js';
import Docente from './aula3/Docente.js';

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
console.log(novoUser.exibirInfos())

// novoUser.#nome = 'Marcia'
// console.log(novoUser.exibirInfos())