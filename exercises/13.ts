// Imprimir en consola todos los precios de los planes de suscripcion
import { data } from "../data";
const planes = data.plans;

const printPrices = () => {
    planes.map((plan) => {
        console.log(plan.price);
    });
}

export default printPrices;
console.log(printPrices());