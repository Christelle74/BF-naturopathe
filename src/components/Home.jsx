import React from 'react';
import Photo from '../assets/Béa_2014.webp'

const Home = () => {
    return (
        <section id="Accueil">
            <div data-aos='flip-right'>
                <img  className='photo' src={Photo} alt="Beatrice Fabry, naturopathe" />
            </div>
            <div data-aos='fade-left' className='presentation'>
                <h1>Béatrice FABRY</h1>
                <p>
                    Naturopathe
                </p>
                <p>
                    Thérapeute en biorésonance
                </p>
                <p>
                    Physionutritionniste diplômée IEPP
                </p>
                <p>
                    Massage Amma
                </p>
                <button type="submit">Contactez-moi</button>
            </div>
        </section>
    );
};

export default Home;