import React , {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";
import Spinner from "./Spinner";

import JSONExperience from './../json/moreInfo'

export default function Experience() {

    const [t] = useTranslation("global");

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    const data = JSONExperience()[0];

    return (
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="mt-5 mb-4 d-flex justify-content-center">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="w-25">{t("table.job-title")}</th>
                                <th className="w-50">{t("table.description")}</th>
                                <th className="w-25">{t("table.year")}</th>
                                <th className="w-25">{t("table.place")}</th>
                                <th>{t("table.certificate")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.Experience.map((experience, index) => (
                                    <tr key={experience.id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{experience.position}</td>
                                        <td>{experience.description}</td>
                                        <td>{experience.year}</td>
                                        <td><p dangerouslySetInnerHTML={{__html:experience.place}}></p></td>
                                        <td><p dangerouslySetInnerHTML={{__html:experience.certificate}}></p></td>
                                    </tr>
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