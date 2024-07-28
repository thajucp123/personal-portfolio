import { useState, useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner/header-img.png";
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

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi, I'm Thajudeen, `}<br/>{`a `}<span className="wrap">{title}</span></h1>
                    <p>I&apos;m a passionate full-stack web developer with a background in Computer Science. 
                    I&apos;m currently working as a Full Stack Developer at <a href="https://www.aes-inspection.com/" target="_blank" rel="noreferrer">AES</a> and I&apos;m looking for new opportunities.
                    </p>
                    <button onClick={()=>{console.log("main connect button click")}} className="vvd"><a className="no-style-a"><span>Let&apos;s Connect <ArrowRightCircle size={25}/></span></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header Image" className="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default Banner;