
import { useRef } from'react';
import Carousel from 'react-bootstrap/Carousel';
const About = ()=> {

    const carouselRef = useRef(null);

    const handleMouseDown = () => {
      if (carouselRef.current) {
        carouselRef.current.pause();
      }
    };
  
    const handleMouseUp = () => {
      if (carouselRef.current) {
        carouselRef.current.cycle();
      }
    };

 return(
    <div className="About">
        <div className="wizard-lottie">
        <iframe src="https://lottie.host/embed/bdffd79c-5ab1-4cb5-b49e-037f21a95d81/xwc4BSLUiA.json"></iframe>
        </div>
        <h1 className="flow">About the Wizard</h1> 
    <p>In the mystical lands of technology, I, a humble coding sorcerer, have traversed the paths of MERN, Flutter, and Kotlin. 
    <br/>With every line of code, I cast spells that bring ideas to life. Join me on a journey through my enchanted career.</p>

    
    
    <h3 className='journey'>My Journey</h3>

    <Carousel fade={true} interval={2000} controls={true} indicators={true} pause={false} ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp} className='carousal-container'>
      <Carousel.Item>
        <div className="carousel-item-content">
        <p>My journey began in the realm of MERN (MongoDB, Express.js, React, Node.js), where I mastered the art of full-stack development. Here, I learned to weave intricate web applications, seamlessly connecting the front-end and back-end with the power of JavaScript.
        </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
        <p>
    Venturing further, I discovered the magical world of Flutter, a framework that allowed me to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. With Flutter, I conjured fluid and responsive user interfaces, ensuring a delightful experience across all platforms.
    </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
        <p>
    My quest for knowledge led me to the domain of Kotlin, where I embraced the elegance and simplicity of this modern programming language. In the Android development landscape, Kotlin became my wand, enabling me to craft robust and efficient mobile applications.
    </p>
        </div>
      </Carousel.Item>
    </Carousel>

    </div>
 )   
}

export default About;