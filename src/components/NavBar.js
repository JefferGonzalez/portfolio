import {useRef, useState, useEffect } from "react";
import {Link,Outlet,useLocation} from 'react-router-dom';

const colores = ["red", "green", "blue", "yellow", "purple", "orange", "black", "white", "brown"];

const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * colores.length);
	return colores[randomIndex];
};

export default function NavBar() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/"); //for class name active

    const [canvasContext, setCanvasContext] = useState(null);

	const canvasRef = useRef(null);

    
	useEffect(() => {
		const canvas = canvasRef.current;

        const obj2D = canvas.getContext('2d');

        canvas.width = document.body.offsetWidth;

        const width = canvas.width;

        const height = canvas.height;

        obj2D.fillStyle = '#000';

        obj2D.fillRect(0, 0, width, height);

        const cols = Math.floor(width / 20) + 1;

        const positionY = Array(cols).fill(0);

        const matrix = () => {

            obj2D.fillStyle = '#3331';
        
            obj2D.fillRect(0, 0, width, height);
        
            obj2D.fillStyle = '#0f0';
        
            obj2D.font = '15pt monospace';
        
            positionY.forEach((y, index) => {
        
                const text =
                    String.fromCharCode(
                        Math.random() * 128
                    );
                const x = index * 20;
                obj2D.fillText(text, x, y);
                if( y > 100 + Math.random() * 10000){
                    positionY[index] = 0;
                }else positionY[index] = y + 20;
            });
        }

        setInterval(matrix,50)
		setCanvasContext(obj2D);
	}, [canvasRef]);

    return (
        <div className='app'>
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol id="facebook" viewBox="0 0 16 16">
                    <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </symbol>
                <symbol id="instagram" viewBox="0 0 16 16">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </symbol>
                <symbol id="twitter" viewBox="0 0 16 16">
                    <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </symbol>
                <symbol id="GitHub" viewBox="0 0 512 499.36">
                    <path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path>
                </symbol>
            </svg>
            <div className="bg-dark fixed-top">
                <canvas className="min-vw-100 h-25" width="100%" height="25%" ref={canvasRef}
				onClick={() => {
					canvasContext.fillStyle = getRandomColor();
					canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
				}}></canvas>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" target="_blank" href="https://github.com/JefferGonzalez/" rel="noopener noreferrer">Hola, soy Jefferson Gonzalez</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} aria-current="page" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "projects" ? "nav-link active" : "nav-link"} to='/projects'>Proyectos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "skills" ? "nav-link active" : "nav-link"} to='/skills'>Habilidades</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "experience" ? "nav-link active" : "nav-link"} to='/experience'>Experiencia</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "education" ? "nav-link active" : "nav-link"} to='/education'>Educación</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={splitLocation[1] === "contact" ? "nav-link active" : "nav-link"} to='/contact'>Contacto</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                BIENVENIDO SUMERCÉ :D
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    )

}