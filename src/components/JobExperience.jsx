import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; //a library for easy tilt components

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'AES India',
    date: 'August 2021 - Present',
    description: `Developed and maintained web apps using the MERN stack and Next.js, created native Android and Flutter applications, and designed user-friendly interfaces. Leveraged cloud platforms for deployment and \nmanaged CI/CD pipelines to ensure efficient development and deployment processes.`
  }
];

const JobExperience = () => {

  return (
    <div className="job-experience-section" id='experience'>
        <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn', type: 'spring' }}
        >
      <h1 className='flow'>Chronicles of Past Adventures</h1>
      <p>A spellbinding stint of learning and growth, where I demonstrated my mastery of coding magic and made my mark.</p>
      </motion.div>
      <div className="experience-container">
        {experiences.map((experience, index) => (
        
        <div className="experience-card-container" key={index}>
            <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#00ffaa" glarePosition="all" glareBorderRadius="8px">
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p className="date">{experience.date}</p>
            <p className="description">{experience.description}</p>
            
          </motion.div>
          </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
