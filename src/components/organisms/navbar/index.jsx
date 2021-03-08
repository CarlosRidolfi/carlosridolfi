import React, { Component } from 'react'
import Logo from '../../atoms/logo/index'
import style from './style.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <header className={style.navbar}>
                    <div className={style.container0}>
                        <Logo />
                        <div className={style.botoes}>
                            <ul>
                                <li>Sobre</li>
                                <li>Projetos</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                    </div>
            </header>
        )
    }
}
