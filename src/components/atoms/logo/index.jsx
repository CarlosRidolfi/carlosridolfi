import React, { Component } from 'react'
import style from './style.module.css'

export default class Logo extends Component {
    render() {
        return (
            <div className={style.logo}>
                <a>Carlos Ridolfi</a>
            </div>
        )
    }
}
