export default function App() {
  return (
    <div className="container">
      <h1 className="titulo">Busca CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o seu CEP..." />
        <button className="buttonSearch">
          Buscar
        </button>
        <main className="main">
          <h2>CEP: 99999-99</h2>
          <p>Rua das </p>
          <p>Complemento: Casa</p>
          <p>Vila das Flores</p>
          <p>Cidade - Estado</p>
        </main>
      </div>
    </div>
  );
}
