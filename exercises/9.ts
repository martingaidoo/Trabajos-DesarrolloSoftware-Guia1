
// Exporta una función que ordene a los usuarios por edad, mostrando los usuarios más jóvenes primero
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";
const usuarios = data.users;

const sortUsers = () => {
    return usuarios.sort((a, b) => {
        return new Date(b.birthdate).getTime() - new Date(a.birthdate).getTime();
    });
};
export default sortUsers;