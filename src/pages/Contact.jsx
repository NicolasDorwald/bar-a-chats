import "./Contact.css"

export default function Contact() {
  return (
        <section className="contact-page">
            <h2>Contactez-nous</h2>
            <p>Vous pouvez nous écrire via ce formulaire, nous vous répondrons rapidement !</p>

            <form 
                action="https://formspree.io/f/mzddpwgd" 
                method="POST"
                className="contact-form"
            >
                <label htmlFor="name">Nom :</label>
                <input type="text" name="name" id="name" placeholder="Votre nom" required />

                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" placeholder="Votre email" required />

                <label htmlFor="message">Message :</label>
                <textarea name="message" id="message" rows="5" placeholder="Votre message" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}
