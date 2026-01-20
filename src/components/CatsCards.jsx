// import './Cats.css';
import catsData from '../data/cats.json'; // importe le JSON

export default function CatsCards() {
    return (
        <section className="cats-list">
            {catsData.map((cat) => (
                <article key={cat.id} className="cat-card">
                    <img src={cat.image} alt={`Portrait de ${cat.name}`} />
                    <div className="cat-info">
                        <h3>{cat.name}</h3>
                        <p><strong>Âge :</strong> {cat.age}</p>
                        <p><strong>Robe :</strong> {cat.color}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}