// Exporta una función que reciba el codigo de la moneda y devuelva los planes de suscripcion convertidos a esta moneda, conservando el precio en dolar respetando la interfaz
interface PlanConverted {
  code: string;
  usd: number;
  //aqui debe devolver la conversión
  usdConversion: number;
  description: string;
}
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const conversion = data.dolarConversion;
const plans = data.plans;

const convertPlans = (code: string): PlanConverted[] => {
  return plans.map((plan) => {
    return {
      code: plan.code,
      usd: plan.price,
      usdConversion: plan.price * conversion[code],
      description: plan.description,
    };
  });
};

export default convertPlans;

console.log(convertPlans("ARS"))