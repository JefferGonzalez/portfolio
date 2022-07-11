import React , {useState, useEffect} from 'react';
import Spinner from "./Spinner";

import Me from './../resources/img/yo.jpg';

export default function AboutMe() {

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    
    return ( 
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="container mt-5 mb-4 d-flex justify-content-center"> 
                <div className="card mt-2 p-2"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image d-flex flex-column justify-content-center align-items-center"> 
                                <div  className="btn btn-outline-secondary btn-backgroud" > 
                                    <img src={Me} alt="Jeffeson David González Cely"/>
                                </div>
                                <br/> 
                                <div className="gap-3 icons d-flex flex-row justify-content-center align-items-center">  
                                    <span>
                                        <a className="link-dark" href="https://github.com/JefferGonzalez" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                                    </span> 
                                    <span>
                                        <a className="link-success" href="https://api.whatsapp.com/send?phone=573118810950" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>       
                                    </span> 
                                    <span>
                                        <a href="https://www.linkedin.com/in/jeffergonzalez" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                    </span>
                                    <span>
                                        <a className="link-info" href="https://twitter.com/_JefferGonzalez" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a> 
                                    </span>
                                </div> 
                                <span className="arroba">@_JefferGonzalez</span>
                                <br/>
                                <a className="btn btn-primary" href="https://drive.google.com/file/d/1F_on-ISJQ9gVsn-w0envkts_OM2990hX/view?usp=sharing" target="_blank">Descargar CV</a>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="text mt-3"> 
                            <span>
                                Soy un joven colombiano de  20 años que sueña con convertirse en DESARROLLADOR DE SOFTWARE.
                                <br/>
                                <br/>
                                Tengo un conjunto diversas habilidades, que van desde los conceptos básicos del diseño Front-End con 
                                HTML, CSS y JavaScript hasta el desarrollo backend con PHP. 
                                Actualmente me encuentro estudiando los conceptos básicos de programación 
                                Back-End con Spring Boot (Java) y Node.js
                                <br/>
                                <br/>
                                El motivo por el cual estoy explorando el desarrollo web, es para poder ganar experiencia en este mundo llamado programación. 
                                Mi ideal a futuro es dedicarme al desarrollo de Inteligencia Artificial.
                                <br/>
                                <br/>
                                <span className='text-primary'>
                                Dale click al canvas :D
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}