import './Concept.css';
import humanCat from '/images/human-cat.webp';
import monstera from '/images/monstera.webp';

export default function Concept() {
    return (  
        <section className="concept">
            <p>"Un refuge végétal au cœur de la ville."</p>
            <div className="slogan">
                Bien-être, Bienveillance & Botanique.
                Notre mission est simple : offrir à nos chats un foyer aimant en attendant leur 
                famille pour la vie, et vous offrir un espace de déconnexion totale.
            </div>
            <div className="concept-img">
                <img src={humanCat} alt="Image d'une femme avc un chat sur les genoux"></img>
                <img src={monstera} alt="Image d'une femme avc un chat sur les genoux"></img>
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
                    moments de lecture ou de travail."
                </article>
            </div>
        </section>
    );
}
