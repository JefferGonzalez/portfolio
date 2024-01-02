import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  getFromLocalStorage,
  saveToLocalStorage
} from '../../utils/localStorage'
import useTranslation from '../../hooks/useTranslation'

import Matrix from '../canva'
import NavBar from '../nav-bar'
import Flag from '../flag'

const lang = getFromLocalStorage()

export default function Header() {
  const { i18n } = useTranslation()

  const [flag, setFlag] = useState({
    country: lang === 'es' ? 'US' : 'CO',
    alt: lang === 'es' ? 'United State' : 'Colombia',
    lang: lang === 'es' ? 'English' : 'Spanish'
  })

  const changeLanguage = () => {
    if (flag.country === 'CO') {
      setFlag({ country: 'US', alt: 'United State', lang: 'English' })
      i18n.changeLanguage('es')
      saveToLocalStorage('es')
    } else {
      setFlag({ country: 'CO', alt: 'Colombia', lang: 'Spanish' })
      i18n.changeLanguage('en')
      saveToLocalStorage('en')
    }
  }

  return (
    <>
      <div className='bg-dark fixed-top'>
        <Matrix />
        <NavBar />
      </div>
      <Outlet />
      <button className='float-btn tooltipCustom' onClick={changeLanguage}>
        <Flag country={flag.country} alt={flag.alt} />
        <span className='tooltiptext'>{flag.lang}</span>
      </button>
    </>
  )
}
