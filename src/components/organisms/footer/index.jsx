import React, { Component } from 'react'
import Logo from '../../atoms/logo/index'
import style from './style.module.css'
import Linkedin from '../../images/linkedin.svg'
import Github from '../../images/github.svg'
import Email from '../../images/email.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                    <Logo />
                <div className={style.redes}>
                    <a href='https://www.linkedin.com/in/carlos-ridolfi/' target='_blank'><img src={Linkedin}/></a>
                    <a href='https://github.com/CarlosRidolfi' target='_blank'><img src={Github} /></a>
                    <a href="mailto:carlos.a.ridolfi@gmail.com" target='_blank'><img src={Email} /></a>
                </div>
                <p>Feito por Carlos Ridolfi</p>
            </footer>
        )
    }
}
