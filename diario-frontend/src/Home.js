export default function Home() {
    return (
      <section className="posts">
        <article>
          <header>
            <h2><a href="/post/1">Título da Postagem</a></h2>
          </header>
          <p>Resumo da postagem...</p>
          <a href="/post/1" className="button">Ler Mais</a>
        </article>
      </section>
    );
  }