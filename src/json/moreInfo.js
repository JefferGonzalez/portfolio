import { useTranslation } from 'react-i18next'
import DIPLOMA from './../assets/pdf/DIPLOMA.pdf'
import ADSI from './../assets/pdf/TITULO ADSI - JEFFERSON DAVID GONZALEZ CELY.pdf'
import PHOTOSHOP from './../assets/pdf/CERTIFICADO-PHOTOSHOP.pdf'
import SURA from './../assets/pdf/SURA-CERTIFICADO.pdf'

function MoreInfo() {
  const [t] = useTranslation('global')

  return {
    Education: [
      {
        id: 1,
        academicDegrees: t('moreInfo.academicDegrees.technologist'),
        year: '2020-2021',
        place:
          "<a class='text-decoration-none' href='https://www.sena.edu.co/es-co/Paginas/default.aspx' target='_blank' rel='noopener noreferrer'>SENA</a>",
        certificate: `<a class='btn btn-primary btn-sm' href='${ADSI}' download>${t(
          'actions.btn-download'
        )}</a>`
      },
      {
        id: 2,
        academicDegrees: t('moreInfo.academicDegrees.photoshop'),
        year: '2021',
        place:
          "<a class='text-decoration-none' href='https://www.sena.edu.co/es-co/Paginas/default.aspx' target='_blank' rel='noopener noreferrer'>SENA</a>",
        certificate: `<a class='btn btn-primary btn-sm' href='${PHOTOSHOP}' download>${t(
          'actions.btn-download'
        )}</a>`
      },
      {
        id: 3,
        academicDegrees: t('moreInfo.academicDegrees.high-school-graduate'),
        year: '2014-2019',
        place:
          "<a class='text-decoration-none' href='https://ietigustavojimenez.controlacademico.com/' target='_blank' rel='noopener noreferrer'>I.E.T.I Gustavo Jiménez</a>",
        certificate: `<a class='btn btn-primary btn-sm' href='${DIPLOMA}' download>${t(
          'actions.btn-download'
        )}</a>`
      }
    ],
    Experience: [
      {
        id: 1,
        position: `${t('moreInfo.jobs.SURA.job-title')}`,
        description: `${t('moreInfo.jobs.SURA.description')}`,
        year: `${t('time.august')}-2021 / ${t('time.february')}-2022 (6 ${t(
          'time.months'
        )})`,
        place:
          "<a class='text-decoration-none' href='https://www.segurossura.com.co/paginas/inicio.aspx' target='_blank' rel='noopener noreferrer'>SEGUROS SURA</a>",
        certificate: `<a class='btn btn-primary btn-sm' href='${SURA}' download>${t(
          'actions.btn-download'
        )}</a>`
      }
    ]
  }
}

export default MoreInfo
