import { useTranslation } from "react-i18next";

function MoreInfo() {
    
    const [t] = useTranslation("global");
    
    return(
        [
            {
                "Education" : [
                    {
                        "id" : 1,
                        "academicDegrees" : t("moreInfo.academicDegrees.high-school-graduate"),
                        "year" : "2014-2019",
                        "place" : "<a class='text-decoration-none' href='https://ietigustavojimenez.controlacademico.com/' target='_blank' rel='noopener noreferrer'>I.E.T.I Gustavo Jiménez</a>",
                        "certificate" : `<a class='btn btn-primary btn-sm' href='${require('./../resources/pdf/DIPLOMA.pdf')}' download>${t("actions.btn-download")}</a>`,
                    },
                    {
                        "id" : 2,
                        "academicDegrees" : t("moreInfo.academicDegrees.technologist"),
                        "year" : "2020-2021",
                        "place" : "<a class='text-decoration-none' href='https://www.sena.edu.co/es-co/Paginas/default.aspx' target='_blank' rel='noopener noreferrer'>SENA</a>",
                        "certificate" : t("actions.process"),
                    },
                    {
                        "id" : 3,
                        "academicDegrees" : t("moreInfo.academicDegrees.photoshop"),
                        "year" : "2021",
                        "place" : "<a class='text-decoration-none' href='https://www.sena.edu.co/es-co/Paginas/default.aspx' target='_blank' rel='noopener noreferrer'>SENA</a>",
                        "certificate" : `<a class='btn btn-primary btn-sm' href='${require('./../resources/pdf/CERTIFICADO-PHOTOSHOP.pdf')}' download>${t("actions.btn-download")}</a>`,
                    },
                    {
                        "id" : 4,
                        "academicDegrees" : t("moreInfo.academicDegrees.ef-set"),
                        "year" : "2022",
                        "place" : "<a class='text-decoration-none' href='https://www.efset.org' target='_blank' rel='noopener noreferrer'>EF SET</a>",
                        "certificate": `<a class='btn btn-primary btn-sm' href='https://www.efset.org/cert/3wfb66' target='_blank'>${t("actions.btn-certificate")}</a>`,  
                    },
                ],
                "Experience" : [
                    {
                        "id" : 1,
                        "position" : `${t("moreInfo.jobs.SURA.job-title")}`,
                        "description" :  `${t("moreInfo.jobs.SURA.description")}`,
                        "year" : `${t("time.august")}-2021 / ${t("time.february")}-2022 (6 ${t("time.months")})`,
                        "place" : "<a class='text-decoration-none' href='https://www.segurossura.com.co/paginas/inicio.aspx' target='_blank' rel='noopener noreferrer'>SEGUROS SURA</a>",
                        "certificate" : `<a class='btn btn-primary btn-sm' href='${require('./../resources/pdf/SURA-CERTIFICADO.PDF')}' download>${t("actions.btn-download")}</a>`,
                    },
                ]
            }
        ]
    )
} 

export default MoreInfo;