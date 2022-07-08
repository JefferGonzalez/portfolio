const JSONProjects = [
    {
        "Completed" : [
            {
                "id": 1,
                "name": "XUE", 
                "url-image": require('./../resources/img/projects/XUE-PHP.png'),
                "description": "HTML, Bootstrap, jQuery y PHP8/MySQL - MVC/CRUD",
            },
            {
                "id": 2,
                "name": "ABM OPERATIONS", 
                "url-image": require('./../resources/img/projects/ALKEMY_CHALLENGE.png'),
                "description": "React, BootStrap, Node.js, Express.js/MySQL y Auth0.",
                "challenge": "Hecho para el Challenge Fullstack JS de <a class='text-decoration-none' href='https://www.alkemy.org/' target='_blank'>Alkemy</a>", 
            },
            {
                "id": 3,
                "name": "TaskList App", 
                "url-image": require('./../resources/img/projects/TaskListApp.png'),
                "description": "React, Material UI, Node.js y Express.js/MySQL - CRUD",
                "challenge" : "Basado en el video de <a class='text-decoration-none' href='https://www.youtube.com/watch?v=_zGL_MU29zs&t=8886s&ab_channel=FaztCode' target='_blank'>Fazt Code</a>", 
            },            
        ],
        "Videos" : [
            {
                "id": 1,
                "name": "XUE-PHP ",
                "description": "Control de Proveedores Clinicos",
                "text" : "Proyecto inicial que surgio al tratar la solucionar la necesidad que me plantearon en mi experiencia como aprendiz en <a class='text-decoration-none' href='https://www.segurossura.com.co/paginas/inicio.aspx' target='_blank'>SURA</a>",
                "url": require('./../resources/video/Xue-PHP.mov'),
                "repository" : "<button class='btn btn-outline-primary'>REPOSITORIO EN PROCESO</button>",
            },
            {
                "id": 2,
                "name": "ABM OF OPERATIONS ",
                "description": "Challenge FullStack JS de Alkemy",
                "text" : "Hecho para el Challenge Fullstack JS de <a class='text-decoration-none' href='https://www.alkemy.org/' target='_blank'>Alkemy</a>",
                "url": require('./../resources/video/Challenge-Alkemy.mov'),
                "repository" : "<a href='https://github.com/JefferGonzalez/Challenge_Alkemy' class='btn btn-outline-primary' role='button' target='_blank'>VER REPOSITORIO</a>",
            },
            {
                "id": 3,
                "name": "Task List App ",
                "description": "App de tareas",
                "text" : "Basado en el video de <a class='text-decoration-none' href='https://www.youtube.com/watch?v=_zGL_MU29zs&t=8886s&ab_channel=FaztCode' target='_blank'>Fazt Code</a>",
                "url": require('./../resources/video/Task-App.mp4'),
                "repository" : "<a href='https://github.com/JefferGonzalez/Task-List' class='btn btn-outline-primary' role='button' target='_blank'>VER REPOSITORIO</a>",
            },
        ]
    }
]

export default JSONProjects;