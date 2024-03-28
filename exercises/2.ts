
// Exporta una función que reciba el codigo del plan de suscripciones y devuelva los usuarios asociados a ese plan
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const usuarios = data.users;



const filtrarUsuario = (plan : String) => {
    return usuarios.filter(usuario => usuario.subscriptionPlan === plan)
}

console.log(filtrarUsuario("basic"))
export default filtrarUsuario;