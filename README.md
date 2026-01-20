### 📄 Pages / sections claires  

 - Contrôle avec barre nav

#### 🏠 Accueil

présentation du bar

ambiance

#### 🐱 Les chats

liste

photos

caractère

#### 🍺 Menu

bières

repas

#### ✉️ Contact

formulaire (Formspree)

horaires

adresse

Avec React Router, tu montres que tu sais structurer une app.

```
project/
├─ public/
│   ├─ index.html
│   └─ favicon.svg
│
├─ src/
│   ├─ main.jsx
│   ├─ App.jsx
│   ├─ index.css        ← styles globaux
│   │
│   ├─ components/
│   │   ├─ Cart/
│   │   │   ├─ Cart.jsx
│   │   │   └─ Cart.css
│   │   │
│   │   ├─ Header/
│   │   │   ├─ Header.jsx
│   │   │   └─ Header.css
│   │
│   ├─ pages/           ← si app multi-pages
│   │   └─ Home.jsx
│   │
│   ├─ assets/
│   │   ├─ images/
│   │   └─ fonts/
│   │
│   └─ utils/
│       └─ helpers.js
```

```
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
```
```
function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

```