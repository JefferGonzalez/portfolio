import React , {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from "./Spinner";

import JSONSkills from './../json/skills.js'
import Adobe_Photoshop_CC from './../resources/img/skills/Adobe_Photoshop_CC.png'

export default function Skills() {

    const [t] = useTranslation("global");

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout((async () => {setIsLoading(false)}),1000)
    }, [isLoading]);

    return (
        <div className="mt-5 p-4">
            {isLoading ? (<Spinner/>) : (
            <div className="container">
                 <div className="d-flex justify-content-center">
                    <h2 id="skills" className="mt-5">{t("skills.title")}</h2>
                </div>
                <div className="row">
                    {
                    JSONSkills.map(type => (
                        type['Studied'].map(skill => (
                            <div key={skill.id} className="col-md-1 mt-2 tooltipCustom" style={{width: '11rem'}}>
                                <div className="card w-100 h-100 justify-content-center ">
                                    <img src={skill['url-image']} className="card-img-top border-none" alt="Logo of HTML-5"/>
                                    <span className="tooltiptext">{skill.name}</span>
                                </div>
                            </div>
                        ))
                    ))
                    }
                    <h4 className="mt-2">{t("skills.currently-learning")}</h4>
                    {
                    JSONSkills.map(type => (
                        type['Learning'].map(skill => (
                            <div key={skill.id} className="col-md-1 mt-2 tooltipCustom" style={{width: '11rem'}}>
                                <div className="card w-100 h-100 justify-content-center ">
                                    <img src={skill['url-image']} className="card-img-top border-none" alt="Logo of HTML-5"/>
                                    <span className="tooltiptext">{skill.name}</span>
                                </div>
                            </div>
                        ))
                    ))
                    }
                    <div className="d-flex justify-content-center">
                        <h3 className="mt-4">{t("skills.tools")}</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-4 mt-2 tooltipCustom" style={{width: '11rem'}}>
                            <div className="card w-100 h-100">
                                <img src={Adobe_Photoshop_CC} className="card-img-top border-none" alt="Logo of HTML-5"/>
                                <span className="tooltiptext">Adobe Photoshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}                        
        </div>
    )
}