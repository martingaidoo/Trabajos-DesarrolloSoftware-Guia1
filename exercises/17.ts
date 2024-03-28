// Exportar una funcion que reciba dos parametros , una palabra clave y la categoria.
// debe devolver las noticias que contengan la palabra clave dentro del titulo o descripción y pertenezcan a esa categoría
// solo deben mostrarse las noticias donde el usuario publicante se encuentre activo .
import { data } from "../data";
const news = data.news;
const users = data.users;

const searchNews = (keyword: string, category: string) => {
    const usuariosActivos = [];
    for (let i = 0; i < users.length; i++) {
        usuariosActivos.push(users[i].email);}
    return news.filter((n) => {
        return n.title.includes(keyword) || n.description.includes(keyword) && n.category === category && usuariosActivos.includes(n.emailUser);
    });
}
export default searchNews;
//console.log(searchNews("Injured", "science"));