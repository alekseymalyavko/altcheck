import Header from './components/header';
import Hero from './components/hero';
import Table from './components/table';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>      
      <main>
        <Hero/>
        <Table/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
