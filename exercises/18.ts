// Interfaz para noticias de deportes
interface SportNews {
  category: 'sports';
  title: string;
  sourceName: string;
}

// Interfaz para noticias de ciencia
interface ScienceNews {
  category: "science";
  title: string;
  description: string;
}

// Interfaz para noticias de tecnología
interface TechnologyNews {
  category: "technology";
  title: string;
  stars: number;
  url: string;
}

// Interfaz para cualquier otra noticia
interface SimpleNews {
  title: string;
}
import {data} from "../data";

const news = data.news; // Suponiendo que NewsData es el tipo de datos de las noticias

const simplifyNews = (news): (SportNews | ScienceNews | TechnologyNews | SimpleNews)[] => {
  return news.map((n) => {
      switch (n.category) {
          case "sports":
              return {
                  category: "sports",
                  title: n.title,
                  sourceName: n.source.name,
              };
          case "science":
              return {
                  category: "science",
                  title: n.title,
                  description: n.description,
              };
          case "technology":
              return {
                  category: "technology",
                  title: n.title,
                  stars: n.stars,
                  url: n.url,
              };
          default:
              return {
                  title: n.title,
              };
      }
  });
};

export default simplifyNews;
console.log(simplifyNews(news));


//no lo hice yo..-..