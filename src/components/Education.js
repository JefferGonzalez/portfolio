import React , {useState, useEffect} from 'react';
import Spinner from "./Spinner";

import JSONEducation from './../json/moreInfo'

export default function Education() {

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    return (
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="mt-5 mb-4 d-flex justify-content-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="w-50">Titulo</th>
                            <th>Año</th>
                            <th>Lugar</th>
                            <th>Certificado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            JSONEducation.map(item => (
                                item['Education'].map((educatacion, index) => (
                                    <tr key={educatacion.id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{educatacion.academicDegrees}</td>
                                        <td>{educatacion.year}</td>
                                        <td><p dangerouslySetInnerHTML={{__html:educatacion.place}}></p></td>
                                        <td><p dangerouslySetInnerHTML={{__html:educatacion.certificate}}></p></td>
                                    </tr>
                                ))
                            ))
                        }
                    </tbody>
                </table>
            </div>
            )}
        </div>
    )
}