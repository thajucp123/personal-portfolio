import { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import contactImg from "../assets/img/banner/portfolio-contact-img-lo.png";
import bgright from "../assets/img/color-sharp2.png";
import {motion, useAnimation} from "framer-motion";
const Contact = ()=> {

 const formDetails = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

   const [formData, setFormData] = useState(formDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({}); //to store the status of API call result
 

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

    //for handling form input data
    const onFormUpdate = (category, value) => {
        setFormData({
            ...formData,
            [category]: value,
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
    
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), 10000); // 10 seconds timeout
    
        try {
          let response = await Promise.race([
            fetch("http://localhost:5000/send-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(formData),
              signal: abortController.signal,
            }),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("Request timed out")), 10000) // 10 seconds timeout
            ),
          ]);
    
          clearTimeout(timeoutId);
          setButtonText("Send");
    
          let result = await response.json();
          setFormData(formDetails); // Clear the form data
    
          if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
          } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            setStatus({ success: false, message: 'Request timed out. Please try again later.' });
          } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
          }
        } finally {
          setButtonText("Send");
        }
      };

    return(
      <div>
        <img src={bgright} className='contact-background-image-right'/>
       <motion.section className="contact"
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
                className="contact-title"
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'backInOut' , type: 'tween' }}
                >
                <h2 className="flow" id="connect">Summon the Wizard</h2>
                <p>In need of a magical touch for your next project? Summon the coding wizard and <br/>let&apos;s work some magic together.</p>
                </motion.div>
                <Form className="contact-form">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                >
                <Form.Group controlId="formFullname">
                    <Form.Control type="text" placeholder="Full name" required className="form-control-dark" 
                     value={formData.name}
                     onChange={(e)=> onFormUpdate('name', e.target.value)}
                    />
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
                            <Form.Control type="email" placeholder="Email" required className="form-control-dark" 
                            value={formData.email}
                            onChange={(e)=> onFormUpdate('email', e.target.value)}
                            />
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
                            <Form.Control type="tel" placeholder="Phone number" required className="form-control-dark" 
                            value={formData.phone}
                            onChange={(e)=> onFormUpdate('phone', e.target.value)}
                            />
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
                    <Form.Control as="textarea" rows={6} placeholder="Enter your message" required className="form-control-dark" 
                    style={{resize : 'none'}} 
                    value={formData.message}
                     onChange={(e)=> onFormUpdate('message', e.target.value)}
                    />
                </Form.Group>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'backInOut' , type: 'spring' }}
                >
                <button type="submit" className="contact-button" onClick={handleSubmit}>
                    <span>{buttonText}</span>
                </button>
                {
                    status.message && (
                        <p className={`${status.success ? 'success' : 'danger'}`}>{status.message}</p>
                    )
                }
                </motion.div>
            </Form>
                </Col>
            </Row>
        </Container>
       </motion.section>
       </div>
    )
}

export default Contact;