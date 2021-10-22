import React, { useState } from 'react'
import { Navbar,Container} from 'react-bootstrap'
// import { initReactI18next } from 'react-i18next';
import './i18n';
import i18n from "i18next";
import {useTranslation} from "react-i18next";


export default function Navbars() {
  const [g,setG] = useState(0)
  const [w,setW] = useState(0)

  const changeLanguage = (lg) => {
    i18n.changeLanguage(lg)
  }
  const { t } = useTranslation();

    return (
      <>
        <div>
              <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">{t('m')}</Navbar.Brand>
    <Navbar.Brand href="#home">{t('n')}</Navbar.Brand>
    <Navbar.Brand href="#home">{t('О  нас',{g})}</Navbar.Brand>
    <Navbar.Brand href="#home">{t('l')}</Navbar.Brand>
    <Navbar.Brand href="#home">{t('h')}</Navbar.Brand>
    <Navbar.Brand href="#home">{t('j')}({(w)})</Navbar.Brand>
      <button onClick={() =>setG(g +1) }>+</button>
      <button onClick={() =>setW(w -1) }>-</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      </Container>
  </Navbar>
        </div>
  </>
    )
}
