import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="headerText">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          {" "}
          <div className="footer">
            Coded by Ksenia. Open sourced on{" "}
            <a
              href="https://github.com/toxikaa/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://my-awesome-dictionary-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
