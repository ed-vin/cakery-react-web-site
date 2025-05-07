import React from 'react';

function Gallery({ galleryImages, setPhotoIndex, setIsOpen }) {
  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  return (
    <section className="gallery-section">
      <h2>Kaffe & Kakor</h2>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="gallery-button"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
