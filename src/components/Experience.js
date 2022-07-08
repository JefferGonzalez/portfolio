import React , {useState, useEffect} from 'react';
import Spinner from "./Spinner";

import JSONExperience from './../json/moreInfo'

export default function Experience() {

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    return (
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="mt-5 mb-4 d-flex justify-content-center">
                <div class="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="w-25">Cargo</th>
                                <th className="w-50">Descripción</th>
                                <th>Año</th>
                                <th>Lugar</th>
                                <th>Certificado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                JSONExperience.map(item => (
                                    item['Experience'].map((experience, index) => (
                                        <tr key={experience.id}>
                                            <th scope="row">{index+1}</th>
                                            <td>{experience.position}</td>
                                            <td>{experience.description}</td>
                                            <td>{experience.year}</td>
                                            <td><p dangerouslySetInnerHTML={{__html:experience.place}}></p></td>
                                            <td><p dangerouslySetInnerHTML={{__html:experience.certificate}}></p></td>
                                        </tr>
                                    ))
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </div>
    )
}