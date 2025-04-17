import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      
      {/* Estrutura do Massively */}

      <header id="header">
        <a href="/" className="logo">Meu Diário</a>
      </header>
      
      <nav id="nav">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/new">Nova Postagem</a></li>
        </ul>
      </nav>

      {/* Área onde as páginas serão direcionadas */}
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </div>

      <footer id="footer">
        <p>Feito por Guilherme Santos</p>
      </footer>
    </Router>
  );
}

export default App;