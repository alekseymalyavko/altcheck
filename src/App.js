import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <button>Donate</button>
      </header>
      <main>
        <section className="hero">
          <h1 className="hero-title">
            <b>Altcheck</b> helps you focus on promising crypto projects.
          </h1>
          <div className="hero-content">
            <div className="hero-content-item">
              <h3>
                What is altcheck?
              </h3>
              <p>
                We built a tool to help you find and focus on the most promising crypto currency projects. Explore the table or download the data for further analysis.
              </p>
            </div>

            <div className="hero-content-item">
              <h3>
                What is altcheck?
              </h3>
              <p>
                We built a tool to help you find and focus on the most promising crypto currency projects. Explore the table or download the data for further analysis.
              </p>
            </div>
          </div>
        </section>
        <section className="table">
          TABLE
        </section>
        <section className="contact">
          <div className="contact-content">
            <h2 className="contact-content-title">
              Valuable data straight to your inbox
            </h2>
            <p>
              You will receive an email with a direct download link.
            </p>           
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Email"/>
              <input type="submit" value="Send"/>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <small>© Altcheck 2021</small>
        <ul className="footer-contacts">
          <li></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
