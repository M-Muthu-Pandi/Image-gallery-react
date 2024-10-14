import dogone from '../assets/Images/Dog-1.jpg';
import dogtwo from '../assets/Images/Dog-2.webp';
import dogthree from '../assets/Images/Dog-3.webp';
import dogfour from '../assets/Images/Dog-4.jpg';
import dogfive from '../assets/Images/Dog-5.avif';
import dogsix from '../assets/Images/Dog-6.webp';
import dogseven from '../assets/Images/Dog-7.jpg';
import dogeight from '../assets/Images/Dog-8.webp';
import dognine from '../assets/Images/Dog-9.webp';
import dogten from '../assets/Images/Dog-10.webp';

const Gallery = () => {
    
    return (
        <section className='gallery'>
            <div className="gallery__images">
                <img src={dogone} alt="Dog 1" />
                <h3>Soft Dog</h3>
            </div>
            <div className="gallery__images">
                <img src={dogtwo} alt="Dog 2" />
                <h3>The Innocent Look</h3>
            </div>
            <div className="gallery__images">
                <img src={dogthree} alt="Dog 3" />
                <h3>Big Eyed Buggy</h3>
            </div>
            <div className="gallery__images">
                <img src={dogfour} alt="Dog 4" />
                <h3>Julie's Rabbit Ears</h3>
            </div>
            <div className="gallery__images">
                <img src={dogfive} alt="Dog 5" />
                <h3>Small Puppy</h3>
            </div>
            <div className="gallery__images">
                <img src={dogsix} alt="Dog 6" />
                <h3>The Rugged Look</h3>
            </div>
            <div className="gallery__images">
                <img src={dogseven} alt="Dog 7" />
                <h3>Active Puppy</h3>
            </div>
            <div className="gallery__images">
                <img src={dogeight} alt="Dog 8" />
                <h3>Lazy Dog</h3>
            </div>
            <div className="gallery__images">
                <img src={dognine} alt="Dog 9" />
                <h3>Cute Dog</h3>
            </div>
            <div className="gallery__images">
                <img src={dogten} alt="Dog 10" />
                <h3>The Saint Doggo</h3>
            </div>
        </section>
    );
}

export default Gallery;