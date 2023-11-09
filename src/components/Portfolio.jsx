

import { gsap, ScrollTrigger, Draggable,  } from "gsap/all";
import Flip from "gsap/Flip";


gsap.registerPlugin(ScrollTrigger, Draggable, Flip, ); 
const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <main className="gallery">
                    <div data-speed='.9' className="gallery__left">
                        <img className="gallery__item" src="/imgs/1.jpg" alt="" />
                        <img className="gallery__item" src="/imgs/2.jpg" alt="" />

                        <div className="text-block gallery__item">
                            <h2 className="text-block__h">Parallax Effect</h2>
                            <p className="text-block__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero similique repellat nisi ea nulla id totam dolorum laborum exercitationem eos esse officia blanditiis, recusandae amet, culpa maxime. Hic, illo nesciunt!
                            Minima iste illum nulla architecto autem culpa saepe, impedit voluptatum. Odit vel esse illum culpa, animi vero labore omnis eveniet fuga debitis neque facilis aperiam vitae quis dolor veniam sint!
                          </p>
                        </div>
                        <img className="gallery__item" src="/imgs/6.jpg" alt="" />
                    </div>
                    <div data-speed='1.1' className="gallery__right">
                        <div className="text-block gallery__item">
                            <h2 className="text-block__h">Parallax Effect</h2>
                            <p className="text-block__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero similique repellat nisi ea nulla id totam dolorum laborum exercitationem eos esse officia blanditiis, recusandae amet, culpa maxime. Hic, illo nesciunt!
                            Minima iste illum nulla architecto autem culpa saepe, impedit voluptatum. Odit vel esse illum culpa, animi vero labore omnis eveniet fuga debitis neque facilis aperiam vitae quis dolor veniam sint!
                          </p>
                        </div>
                        <img className="gallery__item" src="/imgs/3.jpg" alt="" />
                        <img className="gallery__item" src="/imgs/4.jpg" alt="" />
                        <img className="gallery__item" src="/imgs/5.jpg" alt="" />

                    </div>

                </main>

            </div>

        </div>
    );
};

export default Portfolio;