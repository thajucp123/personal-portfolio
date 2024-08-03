import { useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import contactImg from "../assets/img/banner/portfolio-contact-img-lo.png";
import {motion, useAnimation} from "framer-motion";
const Contact = ()=> {

    /*const formDetails = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

   const [formData, setFormData] = useState(formDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({}); //to store the status of API call result
 */

    //for framer motion animation of image
    const controls = useAnimation();
    useEffect(() => {
      const startAnimation = async () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const yValues = isMobile ? [0,-20, 20, -20,0] : [0,-25, 25, -25,0];
        await controls.start({
          x: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0%)",
          transition: { duration: 1.5, ease: "backInOut", type: "tween" }
        });
        controls.start({
          y: yValues,
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut",},
        });
      };
  
      startAnimation();
    }, [controls]);

    return(
       <motion.section className="contact" id="contact"
       initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
       >
        <Container className="container-dark">
            <Row className="align-items-center">
                <Col md={5}>
                <motion.div
                    initial={{ x: '0%', opacity: 0, filter: 'blur(100%)' }}
                    animate={controls}
                >
                <img src={contactImg} alt="Contact Me" className="contact-img"/>
                </motion.div>
                </Col>
                <Col md={7}>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'backInOut' , type: 'tween' }}
                >
                <h2 className="flow">Summon the Wizard</h2>
                <p>In need of a magical touch for your next project? Summon the coding wizard and <br/>let&apos;s work some magic together.</p>
                </motion.div>
                <Form className="contact-form">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                >
                <Form.Group controlId="formFullname">
                    <Form.Control type="text" placeholder="Full name" required className="form-control-dark" />
                </Form.Group>
                </motion.div>
                <Row>
                    <Col>
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                    >
                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" placeholder="Email" required className="form-control-dark" />
                        </Form.Group>
                    </motion.div>
                    </Col>
                    <Col>
                    <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                    >
                        <Form.Group controlId="formPhone">
                            <Form.Control type="tel" placeholder="Phone number" required className="form-control-dark" />
                        </Form.Group>
                    </motion.div>
                    </Col>
                </Row>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                >
                <Form.Group controlId="formMessage">
                    <Form.Control as="textarea" rows={6} placeholder="Enter your message" required className="form-control-dark" style={{resize : 'none'}} />
                </Form.Group>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                >
                <button type="submit">
                    <span>Send</span>
                </button>
                </motion.div>
            </Form>
                </Col>
            </Row>
        </Container>
       </motion.section>
    )
}

export default Contact;