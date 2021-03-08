import React, { Component } from 'react'
import style from './style.module.css'
import Navbar from '../../organisms/navbar/index'
import Footer from '../../organisms/footer/index'
import Typing from 'react-typing-animation';
import PerfilImg from '../../images/perfilimage.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class index extends Component {
    render() {
        Aos.init();
        return (
            <div className={style.odin}>
                <Navbar />
                <section className={style.section}>
                    <div className={style.container1}>
                        <Typing speed={100}>
                            <h1>./CARLOS RIDOLFI</h1>
                        </Typing>
                    </div>
                </section>
                <section className={style.sobre}>
                <img data-aos="flip-up" data-aos-delay="100" src={PerfilImg} alt='Foto de perfil'/>
                    <div data-aos="flip-down" data-aos-delay="200" className={style.containersobre}>
                        <h2>Sobre</h2>
                        <p>Me chamo Carlos Ridolfi, sou um Full Stack Developer, ou seja, atuo em diversas frentes de desenvolvimento, como Front-End, Back-End e Banco de Dados.</p>
                        <p>Contribuí com a realização de projetos no ministério público do Rio de Janeiro. Dentre esses projetos estavam a criação de sistemas e de app's dos quais participei do processo de desenvolvimento. Atualmente trabalhando como full stack developer. Sou fascinado por tecnologia e sobre como ela impacta nosso mundo e nossas vidas todos os dias.</p>
                    </div>
                </section>
                <section className={style.cards}>
                    <div data-aos="fade-left" data-aos-delay="200" className={style.card1}>
                        <p>Projetos</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400" className={style.card2}>
                        <p>Contato</p>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
