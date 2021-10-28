import Header from "../../components/header";

export default function Categories({categories}) {
    return (
      <>
      <Header />
        <main>
          <h1>Nos dernières categories :</h1>
              <div>
    
              {categories.map(category => {
                return (
                  <article key={category.id}>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </article>
                  
                );
              })}
                
              </div>
        </main>
      </>
    )
  }
  
  
  export const getStaticProps = async () => {
    const url = "http://studi-live-spa-final:8888/api/categories";

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const categories = await response.json();
  
    return {
      props: {
        categories
      }
    }
  }
  