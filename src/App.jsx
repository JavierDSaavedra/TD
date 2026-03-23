import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Ciudad de Concepción</p>
        <h1>Eventos Concepción</h1>
        <p className="subtitle">Encuentra cultura, música y arte en un solo lugar.</p>
      </header>

      <section className="cards" aria-label="Categorías de eventos">
        <article className="card card-cultura">
          <span className="icon" aria-hidden="true">🎭</span>
          <h2>Cultura</h2>
          <p>Obras, ferias y actividades para toda la comunidad.</p>
        </article>

        <article className="card card-musica">
          <span className="icon" aria-hidden="true">🎵</span>
          <h2>Música</h2>
          <p>Conciertos, festivales y sonidos locales en vivo.</p>
        </article>

        <article className="card card-arte">
          <span className="icon" aria-hidden="true">🎨</span>
          <h2>Arte</h2>
          <p>Exposiciones y experiencias creativas para descubrir.</p>
        </article>
      </section>
    </div>
  )
}

export default App
