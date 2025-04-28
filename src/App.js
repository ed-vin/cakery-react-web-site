import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
var galleryImages = [
    { src: kaffe, alt: 'Kaffe' },
    { src: croissant, alt: 'Croissant' },
    { src: chokladboll, alt: 'Chokladboll' },
    { src: kanelbulle, alt: 'Kanelbulle' },
    { src: fralla, alt: 'Fralla' },
    { src: läsk, alt: 'Läsk' },
];
function App() {
    var _a = useState('Start'), page = _a[0], setPage = _a[1];
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(0), photoIndex = _c[0], setPhotoIndex = _c[1];
    var imagesOnly = galleryImages.map(function (img) { return img.src; });
    return (_jsxs("div", { className: "app", children: [_jsx(Header, { page: page, setPage: setPage }), page === 'Start' && (_jsxs(_Fragment, { children: [_jsxs("section", { className: "intro-text", children: [_jsx("h2", { children: "V\u00E4lkommen till Lilla Bageriet" }), _jsx("p", { children: "Vi erbjuder ett brett sortiment av nybakade br\u00F6d, bakverk och kaffe av h\u00F6gsta kvalitet. Kom och njut av v\u00E5ra l\u00E4ckerheter i en mysig atmosf\u00E4r!" })] }), _jsx(Menu, {}), _jsx(Gallery, { galleryImages: galleryImages, setPhotoIndex: setPhotoIndex, setIsOpen: setIsOpen })] })), page === 'Om oss' && (_jsxs("section", { className: "about-section", children: [_jsx("h2", { children: "Om Lilla Bageriet" }), _jsxs("p", { children: ["V\u00E4lkommen till ", _jsx("strong", { children: "Lilla Bageriet" }), " \u2013 en mysig oas mitt i staden d\u00E4r vi erbjuder nybakat br\u00F6d, goda bakverk och kaffe av h\u00F6gsta kvalitet."] }), _jsx("p", { children: "Vi \u00E4r ett litet, familje\u00E4gt bageri med en passion f\u00F6r att skapa godsaker som sprider gl\u00E4dje. V\u00E5rt team arbetar med k\u00E4rlek och noggrant utvalda ingredienser f\u00F6r att ge dig den b\u00E4sta upplevelsen varje g\u00E5ng du bes\u00F6ker oss." }), _jsx("p", { children: "H\u00E4r hittar du ett brett sortiment av bakverk \u2013 fr\u00E5n klassiska kanelbullar till lyxiga chokladbollar. Vi erbjuder ocks\u00E5 ett urval av br\u00F6d, t\u00E5rtor och glutenfria alternativ." }), _jsx("p", { children: "V\u00E5r vision \u00E4r enkel \u2013 att vara en plats d\u00E4r alla kan njuta av god mat, trevlig atmosf\u00E4r och h\u00E4rligt s\u00E4llskap. Kom och h\u00E4lsa p\u00E5 oss n\u00E4r du \u00E4r i n\u00E4rheten!" })] })), page === 'Kontakt' && (_jsxs("section", { className: "contact-section", children: [_jsx("h2", { children: "Kontakt" }), _jsxs("p", { children: ["\uD83D\uDCCD ", _jsx("strong", { children: "Adress:" }), " Storgatan 12, 123 45 Fikastad"] }), _jsxs("p", { children: ["\uD83D\uDCDE ", _jsx("strong", { children: "Telefon:" }), " 0123-456 789"] }), _jsxs("p", { children: ["\uD83D\uDCE7 ", _jsx("strong", { children: "E-post:" }), " kontakt@lillabageriet.se"] }), _jsxs("p", { children: ["\u23F0 ", _jsx("strong", { children: "\u00D6ppettider:" }), " M\u00E5n\u2013Fre 08:00\u201318:00, L\u00F6r\u2013S\u00F6n 09:00\u201316:00"] })] })), isOpen && (_jsx(Lightbox, { open: isOpen, close: function () { return setIsOpen(false); }, slides: imagesOnly.map(function (src, idx) { return ({
                    src: src,
                    title: galleryImages[idx].alt,
                }); }), index: photoIndex })), _jsx(Footer, {})] }));
}
export default App;
