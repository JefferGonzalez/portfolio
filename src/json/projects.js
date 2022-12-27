import { useTranslation } from "react-i18next";

import XUE_IMAGE from "./../assets/img/projects/XUE-PHP.png";
import XUE_VIDEO from "./../assets/video/Xue-PHP.mov";
import ABM_IMAGE from "./../assets/img/projects/ALKEMY_CHALLENGE.png";
import ABM_VIDEO from "./../assets/video/Challenge-Alkemy.mov";
import TaskListImage from "./../assets/img/projects/TaskListApp.png";
import TaskListVideo from "./../assets/video/Task-App.mp4";

function JSONProjects() {
  const [t] = useTranslation("global");

  return {
    Completed: [
      {
        id: 1,
        name: "XUE",
        "url-image": XUE_IMAGE,
        description: "HTML, Bootstrap, jQuery y PHP8/MySQL - MVC/CRUD",
      },
      {
        id: 2,
        name: "ABM OPERATIONS",
        "url-image": ABM_IMAGE,
        description: "React, BootStrap, Node.js, Express.js/MySQL y Auth0.",
        challenge: `${t(
          "projects.ABM-OPERATIONS.description"
        )} <a class='text-decoration-none' href='https://www.alkemy.org/' target='_blank'>Alkemy</a>`,
      },
      {
        id: 3,
        name: "TaskList App",
        "url-image": TaskListImage,
        description: "React, Material UI, Node.js y Express.js/MySQL - CRUD",
        challenge: `${t(
          "projects.TASK-LIST-APP.description"
        )} <a class='text-decoration-none' href='https://www.youtube.com/watch?v=_zGL_MU29zs&t=8886s&ab_channel=FaztCode' target='_blank'>Fazt Code</a>`,
      },
    ],
    Videos: [
      {
        id: 1,
        name: "XUE-PHP ",
        description: t("projects.XUE-PHP.title"),
        text: `${t(
          "projects.XUE-PHP.description"
        )} <a class='text-decoration-none' href='https://www.segurossura.com.co/paginas/inicio.aspx' target='_blank'>SURA</a>`,
        url: XUE_VIDEO,
        repository: `<button class='btn btn-outline-primary'>${t(
          "actions.btn-no-repo"
        )}</button>`,
      },
      {
        id: 2,
        name: "ABM OF OPERATIONS ",
        description: t("projects.ABM-OPERATIONS.title"),
        text: `${t(
          "projects.ABM-OPERATIONS.description"
        )} <a class='text-decoration-none' href='https://www.alkemy.org/' target='_blank'>Alkemy</a>`,
        url: ABM_VIDEO,
        repository: `<a href='https://github.com/JefferGonzalez/Challenge_Alkemy' class='btn btn-outline-primary' role='button' target='_blank'>${t(
          "actions.btn-repo"
        )}</a>`,
      },
      {
        id: 3,
        name: "Task List App ",
        description: t("projects.TASK-LIST-APP.title"),
        text: `${t(
          "projects.TASK-LIST-APP.description"
        )} <a class='text-decoration-none' href='https://www.youtube.com/watch?v=_zGL_MU29zs&t=8886s&ab_channel=FaztCode' target='_blank'>Fazt Code</a>`,
        url: TaskListVideo,
        repository: `<a href='https://github.com/JefferGonzalez/Task-List' class='btn btn-outline-primary' role='button' target='_blank'>${t(
          "actions.btn-repo"
        )}</a>`,
      },
    ],
  };
}

export default JSONProjects;
