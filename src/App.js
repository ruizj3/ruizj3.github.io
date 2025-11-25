import './App.css';
import About from './About'; 
import Portfolio from './Portfolio'; 
import Header from './Header';

function App() {
  return (
    <div className="App">
<section id="hero">
    <h1>Joseph David Ruiz</h1>
    <p>Engineer | Finance</p>
    <a href="/Joseph Ruiz Resume.pdf" target="_blank" rel="noopener noreferrer" class="my-link"><i class="fas fa-file-alt"></i> View My Resume</a>
</section>
      <Header />
      <About />
      <h2>Portfolio</h2>
      <Portfolio />
      {/* other components */}
    </div>
  );
}

export default App;
