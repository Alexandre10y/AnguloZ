import React from "react";
import Header from "../../Components/Header";
import { Container } from "react-bootstrap";
import Logo from '../../Images/Logo.png';
import './style.css'
function Legado() {
    return (
        <>

            <Header />
            <Container className="vhconfig">

                <h1 className="text-center tamanhao pt-3 pb-2">Legado</h1>
                <hr></hr>
                <div className="align-items-center justify-content-center">
                    <div className="d-flex vhconfig placeitem  ">
                        <p className="textoConfig pr-3">Nosso desafio é fazer projeto que serão vibrantes daqui a décadas.

                            O designer conecta sentimentos, a emoção é uma função...
                            <br></br>E o principal objetivo é criar ideias e fazer elas saírem pelo mundo. Parte do nosso trabalho é criar projetos que tenham impacto significativo no espaço, onde cada projeto será revolucionário á sua maneira.

                            Um espírito humanístico é algo importante que incorporamos no que construímos, identificamos e exploramos as possibilidades... dando forma ao mundo em que nós gostaríamos de viver no futuro.

                            Se você realmente inspira esperança, você capacita as pessoas a entender que podemos fazer a diferença no mundo. Esse sentimento é expresso em nossos projetos... é emocionante e são esses resultados que nos impulsiona a continuar produzindo uma arquitetura impactante, inclusiva e transformadora...</p>
                        <div className="espaco pl-2">
                            <img className="imgTamanho " src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Legado;