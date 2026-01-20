import humanCat from '../assets/human-cat.webp';
import monstera from '../assets/monstera.webp';
import "./Concept.css";

export default function Concept() {
  return (
        <section>
            <p>Un refuge végétal au cœur de la ville.</p>
            <div className="slogan">
                Bien-être, Bienveillance & Botanique.
                Notre mission est simple : offrir à nos chats un foyer aimant en attendant leur 
                famille pour la vie, et vous offrir un espace de déconnexion totale.
            </div>
            <div className="concept-img">
                <img src={humanCat} alt="Image d'une femme avec un chat sur les genoux" />
                <img src={monstera} alt="Plante Monstera" />
            </div>
            <div className='snippets'>
                <article>
                    <h4>Côté Nature : </h4>Des plantes luxuriantes transforment le lieu une bulle végétale, 
                        propice au calme et à la détente, où humains et félins partagent la même quiétude.
                </article>
                <article>
                    <h4>Côté Chats : </h4>Tous nos pensionnaires sont issus de refuges partenaires. Ici, 
                    ils sont chez eux, et vous êtes leurs invités.
                </article>
                <article>
                    <h4>Côté Saveurs :</h4> Des produits locaux, bio et faits maison pour accompagner vos 
                    moments de lecture ou de travail.
                </article>
            </div>
        </section>
  );
}
