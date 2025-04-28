import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import kaffe from './assets/kaffe.png';
import croissant from './assets/semla.png';
import chokladboll from './assets/chokladboll.png';
import kanelbulle from './assets/kanelbulle.png';
import fralla from './assets/fralla.png';
import läsk from './assets/läsk.png';

const galleryImages = [
  { src: kaffe, alt: 'Kaffe' },
  { src: croissant, alt: 'Croissant' },
  { src: chokladboll, alt: 'Chokladboll' },
  { src: kanelbulle, alt: 'Kanelbulle' },
  { src: fralla, alt: 'Fralla' },
  { src: läsk, alt: 'Läsk' },
];

function App() {
  const [page, setPage] = useState('Start');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imagesOnly = galleryImages.map((img) => img.src);

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />
      
      {page === 'Start' && (
        <>
          <section className="intro-text">
            <h2>Välkommen till Lilla Bageriet</h2>
            <p>Vi erbjuder ett brett sortiment av nybakade bröd, bakverk och kaffe av högsta kvalitet. Kom och njut av våra läckerheter i en mysig atmosfär!</p>
          </section>
          <Menu />
          <Gallery galleryImages={galleryImages} setPhotoIndex={setPhotoIndex} setIsOpen={setIsOpen} />
        </>
      )}

      {page === 'Om oss' && (
        <section className="about-section">
          <h2>Om Lilla Bageriet</h2>
          <p>Välkommen till <strong>Lilla Bageriet</strong> – en mysig oas mitt i staden där vi erbjuder nybakat bröd, goda bakverk och kaffe av högsta kvalitet.</p>
          <p>Vi är ett litet, familjeägt bageri med en passion för att skapa godsaker som sprider glädje. Vårt team arbetar med kärlek och noggrant utvalda ingredienser för att ge dig den bästa upplevelsen varje gång du besöker oss.</p>
          <p>Här hittar du ett brett sortiment av bakverk – från klassiska kanelbullar till lyxiga chokladbollar. Vi erbjuder också ett urval av bröd, tårtor och glutenfria alternativ.</p>
          <p>Vår vision är enkel – att vara en plats där alla kan njuta av god mat, trevlig atmosfär och härligt sällskap. Kom och hälsa på oss när du är i närheten!</p>
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
      
      <Footer />
    </div>
  );
}

export default App;
