import { motion } from "framer-motion";
const Footer = () => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    
        return (
            <footer className="footer">
                <div className="footer-content">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'backInOut', type: 'tween' }}
                    >
                    <div className="footer-left">
                        <span>&copy; {new Date().getFullYear()} Thajudeen CP</span>
                    </div>
                </motion.div>

                    <div className="footer-center">
                    <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'backInOut', type: 'tween' }}>
                        <button className="go-to-top" onClick={scrollToTop}>
                            Go to the Top
                        </button>
                    </motion.div>
                    </div>

                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'backInOut', type: 'tween' }}>
                    <div className="footer-right flow">
                        <span>
                        {`"May Your Code Be Ever Enchanted!"`}
                        </span>                    
                    </div>
                    </motion.div>
                </div>
            </footer>
        );
    };
    
    export default Footer;