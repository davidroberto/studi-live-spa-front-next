import Header from "../../components/header";

export default function Categories({category}) {
    return (
      <>
        <Header />
        <main>
              <div>
                  <article key={category.id}>
                    <h2>{category.title}</h2>
                  </article>
              </div>
        </main>
      </>
    )
}

export const getStaticPaths = async () => {
    const url = "http://studi-live-spa-final:8888/api/categories";

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const categories = await response.json();

    const paths = categories.map((category) => ({
        params: {
            id: String(category.id)
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}
  
export const getStaticProps = async ({params}) => {
    const url = "http://studi-live-spa-final:8888/api/categories/"+params.id;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
  
    const category = await response.json();

    console.log(category);
  
    return {
      props: {
        category
      }
    }
  }
  