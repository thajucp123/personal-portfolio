import { useState, useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner/header-img-lo-qual.png";
import { motion, useAnimation } from "framer-motion";
function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const titleArr = useMemo(() => {
        return ["Web developer", "Full Stack Developer", "Software Engineer"];
      }, []);
      
    //const titleArr = ["Web developer", "Full Stack Developer", "Software Engineer"];
    //I had to use useMemo because otherwise it shows error on console (still worked though)
    const [title, setTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 1200;
    const [typeSpeed, setTypeSpeed] = useState(300 - Math.random() * 100);
  
    useEffect(() => {
        //for handling the title typing animation
      const handleType = () => {
        let i = loopNum % titleArr.length;
        let fullText = titleArr[i];
        let updatedText = isDeleting ? fullText.substring(0, title.length - 1) : fullText.substring(0, title.length + 1);
  
        setTitle(updatedText);
  
        if (isDeleting) {
          setTypeSpeed(10);
        }
  
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setTypeSpeed(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypeSpeed(50);
        }
      };
  
      const timeout = setTimeout(handleType, typeSpeed);
      return () => clearTimeout(timeout);
    }, [title, isDeleting, loopNum, typeSpeed, titleArr]);


    //for framer motion animation to header image
    const controls = useAnimation();
    useEffect(() => {
      const startAnimation = async () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const yValues = isMobile ? [0,-20, 20, -20,0] : [0,-25, 25, -25,0];
        const xValues = isMobile ? [0, 0, 0] : [0, 25, 0];
        await controls.start({
          x: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0%)",
          transition: { duration: 1.5, ease: "backInOut", type: "tween" }
        });
        controls.start({
          y: yValues,
          x: xValues,
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut",},
        });
      };
  
      startAnimation();
    }, [controls]);

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <motion.div className="banner-left"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeIn', type: 'tween' }}
                    >
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi, I'm Thajudeen, `}<br/>{`a `}<span className="wrap flow">{title}</span></h1>
                    <p>Greetings, Traveler! Enter the Realm of the Coding Wizard. I&apos;m a passionate full-stack web developer with a background in Computer Science. 
                    I&apos;m currently working as a Full Stack Developer at <a href="https://www.aes-inspection.com/" target="_blank" rel="noreferrer">AES</a> and I&apos;m looking for new opportunities.
                    </p>
                    <motion.button onClick={()=>{console.log("main connect button click")}} className="vvd"
                      animate={{
                        x: [0, 10, 0],
                        cursor: 'var(--cursorImg), auto !important',
                        border: '1px solid #d2d1d1',
                        borderRadius: '40px',
                        padding: '10px',
                      }}
                      transition={{
                        duration: 1.2,
                        ease: 'linear',
                        repeat: Infinity,
                      }}
                      >
                      <a className="no-style-a"><span>Let&apos;s Connect <ArrowRightCircle size={25}/></span></a>
                      </motion.button>
                    </motion.div>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                    <motion.img src={headerImg} alt="header Image" className="header-img" 
                    initial={{ x: '100%', opacity: 0, filter: 'blur(100%)' }}
                    animate={controls}
                    />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default Banner;