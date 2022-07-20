import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';

const Routers = [
    {
        path: "/",
        element: <AboutMe/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/skills",
        element: <Skills/>
    },
    {
        path: "/experience",
        element: <Experience/>
    },
    {
        path: "/education",
        element: <Education/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/thankyou",
        element: <ThankYou/>
    }
];

export default Routers;