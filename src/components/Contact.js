import React , {useState, useEffect} from 'react';
import Spinner from "./Spinner";

export default function PersonalData() {
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);


    (() => {        
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
        
            form.classList.add('was-validated')
            }, false)
        })
    })()
    
    return (
        <div className="mt-5 pt-4">
            {isLoading ? (<Spinner/>) : (
            <div className="mt-5 px-2">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title" id="ContactForm">Ponte en contacto conmigo</h5>
                            </div>
                            <div className="card-body">
                                <form className="needs-validation" action='https://formsubmit.co/710c0faf70fc7e67f4d459a639c5635e' method='POST' noValidate>
                                    <input type="hidden" name="_subject" value="Mensaje nuevo :3"/>
                                    <input type="hidden" name="_next" value="http://localhost:3000/thankyou"></input>
                                    <input type="hidden" name="_captcha" value="false"/>
                                    <input type="hidden" name="_template" value="box"/>
                                    <div className="mb-3 has-validation">
                                        <label htmlFor="email" className="form-label">Ingresa tu correo<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" required/>
                                        <div className="invalid-feedback">
                                            Por favor completa este campo.
                                        </div>
                                    </div>
                                    <div className="mb-3 has-validation">
                                        <label htmlFor="message" className="form-label">Mensaje<span className="text-danger">*</span></label>
                                        <textarea className="form-control" id="message" name='message' rows="4" required></textarea>
                                        <div className="invalid-feedback">
                                            Por favor completa este campo.
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success">ENVIAR</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Más sobre mi :)</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Nombre</span>
                                        Jefferson David González Cely
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Edad</span>
                                        20 años
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Nacionalidad</span>
                                        Colombiana
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Idioma</span>
                                        Español(Nativo) - Inglés (B1)
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">WhatsApp</span>
                                        (+57) 311 881 0950
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Correo Electrónico</span>
                                        jefferd2016@gmail.com
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge bg-primary rounded-pill">Dirección</span>
                                        Sogamoso, Boyacá - Colombia
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}