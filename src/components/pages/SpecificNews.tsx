import NavbarNews from '../layout/NavbarNews';
import styles from './SpecificNews.module.css';
import Container from '../layout/Container';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';

function SpecificNews() {
    
    const { state } = useLocation();

    return (
        
        <>
        <NavbarNews imagem_destaque_url={state.imagem_destaque_url} autor_nome={state.autor_nome} categoria_titulo={state.categoria_titulo} created_at={state.created_at} titulo={state.titulo}/>
        <Container>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageSubContainer}>
                        <img src={state.imagem_destaque_url}/>
                    </div>
                    <p>Foto: {state.descricao_imagem}</p>
                </div>
            </div>
        </Container>
        </>
    )
}

export default SpecificNews