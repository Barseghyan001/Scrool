
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";




const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const headerRef = useRef(null)


  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
      })
    }
    gsap.fromTo('.hero-section', { opacity: 1 }, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true
      }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    itemsL.forEach(item => {
      gsap.fromTo(item, { x: -250, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true
        }
      })
    })
    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    itemsR.forEach(item => {
      gsap.fromTo(item, { x: 250, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true
        }
      })
    })


  }, [])
  return (
    <div className="wrapper">
      <div className="content">
        <Header headerRef={headerRef} />
        <Portfolio />

      </div>
    </div>
  );
};

export default App;