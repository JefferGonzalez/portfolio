import Home from "../views/home";
import Projects from "../views/projects";
import Skills from "../views/skills";
import Experience from "../views/experience";
import Education from "../views/education";
import Contact from "../views/contact";
import ThankYou from "../views/thank-you";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/projects",
    element: Projects,
  },
  {
    path: "/skills",
    element: Skills,
  },
  {
    path: "/experience",
    element: Experience,
  },
  {
    path: "/education",
    element: Education,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/thankyou",
    element: ThankYou,
  },
];
