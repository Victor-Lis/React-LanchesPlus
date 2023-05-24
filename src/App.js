import logo from './logo.svg';
import './App.css';

function App() {
  const [ingredientes, setIngredientes] = useState([]);

  const adicionarIngrediente = (ingrediente) => {
    setIngredientes([...ingredientes, ingrediente]);
  };

  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">Lanches+</div>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/usuario">Área do Usuário</a>
            </li>
            <li>
              <a href="/compras">Compras</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="pedido">
          <h2>Seu Pedido</h2>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
        <div className="lanches">
          <h2>Escolha seu Lanche</h2>
          <div className="imagem-lanche">
            {/* Aqui você pode adicionar a imagem do lanche */}
            <img src="caminho-da-imagem-do-lanche" alt="Lanche" />
          </div>
          <div className="ingredientes">
            <h3>Adicione mais um ingrediente:</h3>
            <div>
              <input type="checkbox" id="alface" />
              <label htmlFor="alface">Alface</label>
            </div>
            <div>
              <input type="checkbox" id="tomate" />
              <label htmlFor="tomate">Tomate</label>
            </div>
            {/* Adicione mais ingredientes conforme necessário */}
          </div>
          <button>Adicionar ao Pedido</button>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Lanches+</p>
      </footer>
    </div>
  );
}

export default App;
