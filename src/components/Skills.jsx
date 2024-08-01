import Tilt from 'react-parallax-tilt'; //a library for easy tilt components
import { motion } from 'framer-motion';
const Skills = () => {

    //for framer motion animation
    const slideInBottomVariants = {
        hidden: {
          y: '20%',
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 3.5,
            ease: 'easeIn',
            type: 'spring'
          }
        }
      };

      const zoomInVariants = {
        hidden: {
          transform: 'scale(0.1)',
          opacity: 0
        },
        visible: {
          opacity: 1,
          transform: 'scale(1)',
          transition: {
            duration: 1,
            ease: 'easeIn'
          }
        }
      };


    //card items values
    const skills = [
        {
            title: 'React',
            icon: 'devicon-react-original colored'
        },
        {
            title: 'Next',
            icon: 'devicon-nextjs-plain'
        },
        {
            title: 'Node',
            icon: 'devicon-nodejs-plain colored'
        },
        {
            title: 'Express',
            icon: 'devicon-express-original'
        },
        {
            title: 'MongoDB',
            icon: 'devicon-mongodb-plain colored'
        },
        {
            title: 'Javascript',
            icon: 'devicon-javascript-plain colored'
        },
        {
            title: 'Typescript',
            icon: 'devicon-typescript-plain colored'
        },
        {
            title: 'GraphQL',
            icon: 'devicon-graphql-plain colored'
        },
        {
            title: 'Tailwind',
            icon: 'devicon-tailwindcss-original colored'
        },
        {
            title: 'Flutter',
            icon: 'devicon-flutter-plain colored'
        },
        {
            title: 'Kotlin',
            icon: 'devicon-kotlin-plain colored'
        },
        {
            title: 'Git',
            icon: 'devicon-git-plain colored'
        },
        {
            title: 'AWS',
            icon: 'devicon-amazonwebservices-plain-wordmark colored'
        },
        {
            title: 'Figma',
            icon: 'devicon-figma-plain colored'
        },
        {
            title: 'Jira',
            icon: 'devicon-jira-plain colored'
        },
        {
            title: 'Docker',
            icon: 'devicon-docker-plain colored'
        },
        {
            title: 'Selenium',
            icon: 'devicon-selenium-original colored'
        },
        {
            title: 'Jest',
            icon: 'devicon-jest-plain colored'
        }
    ];


    return (

        <>
        <section className='skill'>
        <motion.div className='skill-bx'
        initial="hidden"
        whileInView="visible"
        variants={slideInBottomVariants}
        >
        <h2 className='flow'  id="skills">Bag of Digital Tricks</h2>
        <br/>
        <p>Every wizard has their arsenal of spells, and I am no exception. Here are the magical languages <br/>
            and frameworks I wield to craft enchanted digital experiences</p>
        <br/>

        <div className='skill-tilt-area'>
        {skills.map((skill, index) => (
        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px" key={index}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        >
        <div className='skill-item glowing'>
        <i className={skill.icon} style={{fontSize : 52}}></i>
            <h5>{skill.title}</h5>
        </div>
        </motion.div>
        </Tilt>
        ))}
        </div>

        </motion.div>
        </section>
        </>
    )
}

export default Skills;