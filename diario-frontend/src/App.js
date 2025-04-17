import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <header id="header">
          <a href="/" className="logo">Meu Diário</a>
        </header>

        <nav id="nav">
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/new">Nova Postagem</a></li>
          </ul>
        </nav>

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/new" element={<NewPost />} />
          </Routes>
        </div>

        <footer id="footer">
          <p>Feito com React e Massively</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;