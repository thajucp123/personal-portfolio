import { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import contactImg from "../assets/img/banner/portfolio-contact-img-lo.png";
import bgright from "../assets/img/color-sharp2.png";
import {motion, useAnimation} from "framer-motion";

const Contact = () => {
  const formDetails = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formData, setFormData] = useState(formDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({}); // to store the status of API call result
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [errors, setErrors] = useState({}); // to store form validation errors

  const successSound = new Audio('/sound/success.mp3');
  const errorSound = new Audio('/sound/error.mp3');

  // for framer motion animation of image
  const controls = useAnimation();
  useEffect(() => {
    const startAnimation = async () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const yValues = isMobile ? [0, -20, 20, -20, 0] : [0, -25, 25, -25, 0];
      await controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0%)",
        transition: { duration: 1.5, ease: "backInOut", type: "tween" }
      });
      controls.start({
        y: yValues,
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      });
    };

    startAnimation();
  }, [controls]);

  // for handling form input data
  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/; // simple regex for 10 digit phone number
    return re.test(String(phone));
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Invalid phone number format";
      valid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");
    setButtonsDisabled(true);

    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 10000); // 10 seconds timeout

    // following to avoid removing of new line characters when sending as json
    const formDataWithMarkers = {};
    Object.keys(formData).forEach((key) => {
      formDataWithMarkers[key] = formData[key].replace(/\n/g, '\\n');
    });

    try {
      let response = await Promise.race([
        fetch("https://thaju-cp.vercel.app/send-email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDataWithMarkers),
          signal: abortController.signal,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000) // 20 seconds timeout
        ),
      ]);

      clearTimeout(timeoutId);

      let result = await response.json();
      setFormData(formDetails); // Clear the form data

      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
        successSound.play();
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        errorSound.play();
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setStatus({ success: false, message: 'Request timed out. Please try again later.' });
        errorSound.play();
      } else {
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        errorSound.play();
      }
    } finally {
      setButtonText("Send");
      setButtonsDisabled(false);
      let timer = setInterval(() => {
        const obj = {}; // empty object
        setStatus(obj); // to clear the status so it no longer shows after 5 secs
        clearInterval(timer);
      }, 5000);
    }
  };

  return (
    <div>
      <img src={bgright} className='contact-background-image-right' />
      <motion.section className="contact"
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
      >
        <Container className="container-dark">
          <Row className="align-items-center">
            <Col md={5}>
              <motion.div
                initial={{ x: '0%', opacity: 0, filter: 'blur(100%)' }}
                animate={controls}
              >
                <img src={contactImg} alt="Contact Me" className="contact-img" />
              </motion.div>
              <p className="contact-email">You may also contact me directly at &nbsp;
                <a href="mailto:info@thajucp.in">info@thajucp.in</a>
              </p>
            </Col>
            <Col md={7}>
              <motion.div
                className="contact-title"
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'backInOut', type: 'tween' }}
              >
                <h2 className="flow" id="connect">Summon the Wizard</h2>
                <p>In need of a magical touch for your next project? Summon the coding wizard and <br />let&apos;s work some magic together.</p>
              </motion.div>
              <Form className="contact-form" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
                >
                  <Form.Group controlId="formFullname">
                    <Form.Control type="text" placeholder="Full name" required className="form-control-dark"
                      value={formData.name}
                      onChange={(e) => onFormUpdate('name', e.target.value)}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </motion.div>
                <Row>
                  <Col>
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
                    >
                      <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Email" required className="form-control-dark"
                          value={formData.email}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  </Col>
                  <Col>
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
                    >
                      <Form.Group controlId="formPhone">
                        <Form.Control type="tel" placeholder="Phone number" required className="form-control-dark"
                          value={formData.phone}
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  </Col>
                </Row>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
                >
                  <Form.Group controlId="formMessage">
                    <Form.Control as="textarea" rows={3} placeholder="Message" required className="form-control-dark"
                      value={formData.message}
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: 'backInOut', type: 'spring' }}
                >
                  <button type="submit" className="contact-button" disabled={buttonsDisabled}>
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
  );
};

export default Contact;
