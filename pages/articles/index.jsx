import Header from "../../components/header";
import Link from 'next/link';

export default function Articles({articles}) {
    return (
      <>
        <Header />
        <main>
          <h1>Nos derniers articles :</h1>
              <div>
    
                {articles.map(article => {
                  return (
                    <article key={article.id}>
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                      <Link href={"/articles/"+article.id}>
                          <a>Voir l'article</a>
                      </Link>
                    </article>
                    
                  );
                })}
                
              </div>
        </main>
      </>
    )
  }
  
  
  export const getStaticProps = async () => {
    const url = "http://studi-live-spa-final:8888/api/articles";
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const articles = await response.json();
  
    return {
      props: {
        articles
      }
    }
  }
  