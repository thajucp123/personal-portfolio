import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Whatsapp } from 'react-bootstrap-icons';
const WhatsappButton = () =>{

    const [showButton, setShowButton] = useState(false);
    const [showSpan, setShowSpan] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseOver = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
        setShowSpan(isMobile? false: true);
    };
  
    const handleMouseOut = () => {
      setShowSpan(false);
    };

    return(
        <motion.div
      className="whatsapp-button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <motion.a
        href="https://wa.me/+919544139082"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        whileHover={{ width: '150px' }}
      >
        <Whatsapp size={35}/>
        {showSpan && (
          <motion.span
          className='whatsapp-text'
            initial={{ opacity: 0,scale: -1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Whatsapp<br/>me
          </motion.span>
        )}
      </motion.a>
    </motion.div>
    )
}

export default WhatsappButton;