
// Exporta una función que  devuelva los usuarios activos mayores de 18 años
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const usuarios = data.users;

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

const filtrarMayores= ()=>{
    return usuarios.filter(u=>calcularEdad(u.birthdate)>= 18)
};

console.log(filtrarMayores());

export default filtrarMayores;