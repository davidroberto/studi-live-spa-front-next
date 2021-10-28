import Header from "../../components/header";

export default function Article({article}) {
    return (
      <>
        <Header />
        <main>
          <h1>{article.title}</h1>
              <p>{article.description}</p>
              <p>{article.content}</p>
        </main>
      </>
    )
  }

  export const getStaticPaths = async () => {
    
    const url = "http://studi-live-spa-final:8888/api/articles";
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const articles = await response.json();

    const paths = articles.map((article) => ({
        params: {
            id: String(article.id)
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}
  
  
  export const getStaticProps = async ({params}) => {
    const url = "http://studi-live-spa-final:8888/api/articles/"+params.id;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const article = await response.json();
  
    return {
      props: {
        article
      }
    }
  }
  