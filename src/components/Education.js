import React , {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";

import Spinner from "./Spinner";
import JSONEducation from './../json/moreInfo'

export default function Education() {

    const [t] = useTranslation("global");

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    const data = JSONEducation()[0];

    return (
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="mt-5 mb-4 d-flex justify-content-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="w-50">{t("table.degree")}</th>
                            <th>{t("table.year")}</th>
                            <th>{t("table.place")}</th>
                            <th>{t("table.certificate")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Education.map((educatacion , index) => (
                                <tr key={educatacion.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{educatacion.academicDegrees}</td>
                                    <td>{educatacion.year}</td>
                                    <td><p dangerouslySetInnerHTML={{__html:educatacion.place}}></p></td>
                                    <td><p dangerouslySetInnerHTML={{__html:educatacion.certificate}}></p></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            )}
        </div>
    )
}