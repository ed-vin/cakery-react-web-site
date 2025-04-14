import { useState } from 'react';
import './App.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// 🔽 Importera bilder lokalt
import kaffe from './assets/kaffe.png';
import croissant from './assets/semla.png';
import chokladboll from './assets/chokladboll.png';
import kanelbulle from './assets/kanelbulle.png';
import fralla from './assets/fralla.png';
import läsk from './assets/läsk.png';

type MenuCategory = 'Bröd' | 'Bakverk' | 'Drycker';
type Page = 'Start' | 'Om oss' | 'Kontakt';

type MenuItem = { name: string; price: string };

const menu: Record<MenuCategory, MenuItem[]> = {
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

const categoryEmojis: Record<MenuCategory, string> = {
  Bröd: '🍞',
  Bakverk: '🧁',
  Drycker: '☕',
};

const galleryImages = [
  { src: kaffe , alt: 'Kaffe' },
  { src: croissant, alt: 'Croissant' },
  { src: chokladboll, alt: 'Chokladboll' },
  { src: kanelbulle, alt: 'Kanelbulle' },
  { src: fralla, alt: 'Fralla' },
  { src: läsk, alt: 'Läsk' },
];

function App() {
  const [page, setPage] = useState<Page>('Start');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Bröd');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imagesOnly = galleryImages.map((img) => img.src);

  return (
    <div className="app">
      <header className="header">
        <h1>❤️ Lilla Bageriet</h1>
        <nav className="nav">
          <button onClick={() => setPage('Start')} className={`nav-button ${page === 'Start' ? 'active' : ''}`}>Start</button>
          <button onClick={() => setPage('Om oss')} className={`nav-button ${page === 'Om oss' ? 'active' : ''}`}>Om oss</button>
          <button onClick={() => setPage('Kontakt')} className={`nav-button ${page === 'Kontakt' ? 'active' : ''}`}>Kontakt</button>
        </nav>
      </header>

      {page === 'Start' && (
        <>
          <section className="about-section">
            <h2>Om Lilla Bageriet</h2>
            <p>
              Välkommen till <strong>Lilla Bageriet</strong> – en mysig oas där doften av nybakade bröd och
              fika sprider sig i luften. Vi är ett familjeägt café som har funnits i hjärtat av staden i över
              10 år, och vi är stolta över att erbjuda våra kunder en kombination av traditionellt hantverk
              och moderna smaker.
            </p>
            <p>
              Våra bageriprodukter tillverkas från grunden med de finaste råvarorna, och vi erbjuder allt från
              nybakat bröd och klassiska bakverk till en härlig kopp kaffe eller te. Oavsett om du vill unna
              dig något sött eller bara ta en paus med en kopp kaffe, så har vi något för alla smaker.
            </p>
            
          </section>
          <h2>Vår Meny</h2>
          <nav className="nav category-nav">
            

            {Object.keys(menu).map((category) => (
              
              <button
                key={category}
                className={`nav-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category as MenuCategory)}
              >
                {categoryEmojis[category as MenuCategory]} {category}
              </button>
            ))}
          </nav>

          <main className="menu-section">
            <h2>{categoryEmojis[selectedCategory]} {selectedCategory}</h2>
            <ul className="menu-list">
              {menu[selectedCategory].map((item) => (
                <li key={item.name} className="menu-item">
                  {categoryEmojis[selectedCategory]} {item.name} – {item.price}
                </li>
              ))}
            </ul>
          </main>

          <section className="gallery-section">
            <h2>Kaffe & Kakor</h2>
            <div className="gallery">
              {galleryImages.map((image, index) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {page === 'Om oss' && (
        <section className="about-section">
          <h2>Om Lilla Bageriet</h2>
          <p>
            Välkommen till <strong>Lilla Bageriet</strong> – en mysig oas där doften av nybakade bröd och
            fika sprider sig i luften. Vi är ett familjeägt café som har funnits i hjärtat av staden i över
            10 år, och vi är stolta över att erbjuda våra kunder en kombination av traditionellt hantverk
            och moderna smaker.
          </p>
          <p>
            Våra bageriprodukter tillverkas från grunden med de finaste råvarorna, och vi erbjuder allt från
            nybakat bröd och klassiska bakverk till en härlig kopp kaffe eller te. Oavsett om du vill unna
            dig något sött eller bara ta en paus med en kopp kaffe, så har vi något för alla smaker.
          </p>
        </section>
      )}

      {page === 'Kontakt' && (
        <section className="contact-section">
          <h2>Kontakt</h2>
          <p>📍 <strong>Adress:</strong> Storgatan 12, 123 45 Fikastad</p>
          <p>📞 <strong>Telefon:</strong> 0123-456 789</p>
          <p>📧 <strong>E-post:</strong> kontakt@lillabageriet.se</p>
          <p>⏰ <strong>Öppettider:</strong> Mån–Fre 08:00–18:00, Lör–Sön 09:00–16:00</p>
        </section>
      )}

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={imagesOnly.map((src, idx) => ({
            src: src,
            title: galleryImages[idx].alt,
          }))}
          index={photoIndex}
        />
      )}

      <footer className="footer">
        <p>Välkommen in för en fika!</p>
      </footer>
    </div>
  );
}

export default App;
