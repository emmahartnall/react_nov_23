import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h1>Emma's quoting app</h1>
        <MyButton />
      </main>
    </div>
  );
}

function MyButton() {
  return (
    <button>Get Quote</button>
  );
}

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">Quoting App</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#quotes">Quotes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default App;
