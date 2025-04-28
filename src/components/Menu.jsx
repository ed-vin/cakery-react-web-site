import React, { useState } from 'react';

const menu = {
  Bröd: [
    { name: 'Surdegsbröd', price: '45 kr' },
    { name: 'Frallor', price: '15 kr' },
    { name: 'Focaccia', price: '40 kr' },
  ],
  Bakverk: [
    { name: 'Kanelbullar', price: '25 kr' },
    { name: 'Chokladbollar', price: '20 kr' },
    { name: 'Croissanter', price: '30 kr' },
  ],
  Drycker: [
    { name: 'Kaffe', price: '28 kr' },
    { name: 'Te', price: '25 kr' },
    { name: 'Läsk', price: '22 kr' },
  ],
};

const categoryEmojis = {
  Bröd: '🍞',
  Bakverk: '🧁',
  Drycker: '☕',
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Bröd');

  return (
    <section className="menu-section">
      <h2>Vår Meny</h2>
      <nav className="nav category-nav">
        {Object.keys(menu).map((category) => (
          <button
            key={category}
            type="button"
            className={`nav-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {categoryEmojis[category]} {category}
          </button>
        ))}
      </nav>

      <ul className="menu-list">
        {menu[selectedCategory].map((item) => (
          <li key={item.name} className="menu-item">
            {categoryEmojis[selectedCategory]} {item.name} – {item.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
