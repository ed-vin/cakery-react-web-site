import React from 'react';

function Header({ page, setPage }) {
  return (
    <header className="header">
      <h1>❤️ Lilla Bageriet</h1>
      <nav className="nav">
        <button type="button" onClick={() => setPage('Start')} className={`nav-button ${page === 'Start' ? 'active' : ''}`}>
          Start
        </button>
        <button type="button" onClick={() => setPage('Om oss')} className={`nav-button ${page === 'Om oss' ? 'active' : ''}`}>
          Om oss
        </button>
        <button type="button" onClick={() => setPage('Kontakt')} className={`nav-button ${page === 'Kontakt' ? 'active' : ''}`}>
          Kontakt
        </button>
      </nav>
    </header>
  );
}

export default Header;
