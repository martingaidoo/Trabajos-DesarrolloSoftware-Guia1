// Exportar una funcion que devuelva ordenadas las noticias de acuerdo al precio de la 
//suscripcion del usuario, primero las de suscripcion con más valor.
import { data } from "../data";
const news = data.news;
const users = data.users;
const plans = data.plans;

function conseguirPrecioEmail(email) {
    const user = users.find((u) => u.email === email);
    if (user) {
        const plan = plans.find((p) => p.code === user.subscriptionPlan);
        if (plan) {
            return plan.price;
        }
    }
    return undefined;
}

function ordenarPorPrecio() {
    const newsOrdenadas = news.sort((a, b) => conseguirPrecioEmail(b.emailUser) - conseguirPrecioEmail(a.emailUser));
    return newsOrdenadas;
}
export default ordenarPorPrecio;
//console.log(ordenarPorPrecio());