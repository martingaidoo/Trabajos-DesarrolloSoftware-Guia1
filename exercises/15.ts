// Exportar una funcion que devuelva el primer y ultimo usuario suscripto al plan free
import { data } from "../data";

const users = data.users;
//en data no hay ninuna informacion sobre la fecha de inscripcion asi que se tomara el id mas reciente y el id mas viejo.

const firstAndLastUser = () => {
    const chicoGrandeUsers = users.sort((a, b) => a.id - b.id);
    let primero = chicoGrandeUsers[0];
    let ultimo = chicoGrandeUsers[chicoGrandeUsers.length - 1];
    return ([primero, ultimo]);
};
export default firstAndLastUser;
console.log(firstAndLastUser());