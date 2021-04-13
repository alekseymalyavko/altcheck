import Header from './components/header';
import Hero from './components/hero';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>      
      <main>
        <Hero/>
        <section className="table">
          <div className="container">
            TABLE          
          </div>
        </section>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
