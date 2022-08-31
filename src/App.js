import logo from "./logo.svg";
import "./App.css";
import { FrontContainer, Nav, ArticleContainer, Title, Form } from "./components";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useArticles from "./hooks/useArticles";
import { Route } from "wouter";


function App() {
  const { articles, setFilter, filter } = useArticles();
  return (
      <div className="App">
        <header>
          <FrontContainer />
        </header>
        <main>
          <section className="section-container">
            <header>
              <Title title="Nuestros Artículos" />
            </header>
            <div className="articles-searcher">

              <div className="articles-searcher__left">
                <Nav
                  routes={[
                    {
                      name: "TODOS",
                      filter: "Todos",
                    },
                    {
                      name: "PRODUCTOS",
                      filter: "Productos",
                    },
                    {
                      name: "RECETAS",
                      filter: "Recetas",
                    },
                    {
                      name: "CONSEJOS",
                      filter: "Consejos",
                    },
                  ]}
                  filter={filter}
                  setFilter={setFilter}
                />
              </div>
              <div className="articles-searcher__right">
                <ArticleContainer articles={articles} />
              </div>
            </div>
          </section>
          <section className="section-container">
            <header>
              <Title title="Contáctanos" />
            </header>
            <div className="form-container">
              <Form />
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    );
}
export default App;

