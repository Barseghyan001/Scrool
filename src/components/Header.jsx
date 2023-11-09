


import { gsap, ScrollTrigger, Draggable } from "gsap/all";

import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip); 
const Header = ({headerRef}) => {
    return (
        <header className="hero-section">
            <img data-lag='.5' data-speed='.6' ref={headerRef} src="/imgs/hero.png" className="hero" alt="" />
            <div className="container">
                <div data-speed='.75' className="main-header">
                    <h1 className="main-title">Creative</h1>
                </div>

            </div>
        </header>
    );
};

export default Header;