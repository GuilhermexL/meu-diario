import React from 'react';
// import { useParams } from 'react-router-dom';

const Post = () => {
  // Dados de exemplo (substitua pela sua API depois)
  const postData = {
    title: "Meu Primeiro Post",
    date: "10/05/2024",
    content: "Este é o conteúdo completo da minha postagem..."
  };

  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
          <span className="date">{postData.date}</span>
          <h2>{postData.title}</h2>
          <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
          facilisis ante sed etiam magna interdum congue.</p>
        </header>
        
        <div className="image main">
          <img src="/assets/images/pic01.jpg" alt={postData.title} />
        </div>
        
        <p>{postData.content}</p>
        
        <ul className="actions special">
          <li><a href="/" className="button">Voltar</a></li>
        </ul>
      </article>
      
      <footer id="footer">
        <section>
          <h2>Feito por Guilherme Santos</h2>
        </section>
      </footer>
    </div>
  );
};

export default Post;