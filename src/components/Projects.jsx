import { motion } from 'framer-motion';
import pic from "../assets/img/projects/project-placeholder.jpg";
import  bgleft from "../assets/img/color-sharp.png";
import Card from 'react-bootstrap/Card';

const projects = [
  {
    title: 'Ente Kottakkal',
    description: `This is one of my most ambitious personal projects that I have made for the people of my
village called “Kottakkal”. With this app, anyone in my village will be able to access a large database of
locally relevant data such as shops & workers contact details, various govt. & non-govt. organizations’
data, local bus timings, a complete blood bank database, and much more..`,
    image: pic,
    live: '#',
    github: '#'
  },
  {
    title: 'Project 2',
    description: `Exploring the cosmos is a fascinating journey that reveals the universe's vast mysteries. With advanced telescopes, we can observe distant galaxies, stars, and planets, unraveling secrets of dark matter, black holes, and the cosmic dance of celestial bodies, ultimately illuminating our understanding of the universe's grand tapestry and humanity's place within it.`,    
    image: pic,
    live: '#',
    github: '#'
  },
  {
    title: 'Project 3',
    description: `Exploring the cosmos is a fascinating journey that reveals the universe's vast mysteries. With advanced telescopes, we can observe distant galaxies, stars, and planets, unraveling secrets of dark matter, black holes, and the cosmic dance of celestial bodies, ultimately illuminating our understanding of the universe's grand tapestry and humanity's place within it.`,    
    image: pic,
    live: '#',
    github: '#'
  },
  {
    title: 'Project 4',
    description: `Exploring the cosmos is a fascinating journey that reveals the universe's vast mysteries. With advanced telescopes, we can observe distant galaxies, stars, and planets, unraveling secrets of dark matter, black holes, and the cosmic dance of celestial bodies, ultimately illuminating our understanding of the universe's grand tapestry and humanity's place within it.`,    
    image: pic,
    live: '#',
    github: '#'
  },
  
];

const Projects = () => {

  return (
    <div className="projects-section" id='projects'>
    <motion.div
    initial={{ x: '-100%', opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeIn', type: 'spring' }}
    >
    <h1 className="flow">{`The Wizard's Workshop`}</h1> 
    <p>Behold the magical artifacts I have crafted through my journeys. 
    <br/>Each project is a testament to the power of code and the magic it holds.</p>
    </motion.div>
    <div className="projects-container">
      {projects.map((project, index) => (
        <motion.Card style={{ width: '30rem' }}
        className="project-card"
        key={index}
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'backInOut' , type: 'spring' }}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body className='card-content'>
                <Card.Title className='project-title'>{project.title}</Card.Title>
                <Card.Text className='project-para'>
                {project.description}
                </Card.Text>
                <button className='project-button'><span>Live Demo</span></button>
                <button className='project-button'><span>Github Repo</span></button>
              </Card.Body>
            </motion.Card>
            
      ))}
<img src={bgleft} className='projects-background-image-left'/>
    </div>
    </div>
  );
};

export default Projects;
