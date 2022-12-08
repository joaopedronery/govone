import styles from './NavbarNews.module.css';
import {FaTwitter, FaWhatsapp} from 'react-icons/fa';

type PropsType = {
    titulo: string;
    categoria_titulo: string;
    autor_nome: string;
    created_at: string;
    imagem_destaque_url: string;
}

function NavbarNews({ imagem_destaque_url, titulo, categoria_titulo, autor_nome, created_at}: PropsType) {


    return (
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.elementsContainer}>
                <p>{categoria_titulo.toUpperCase()}</p>
                <h1>{titulo}</h1>
                <div className={styles.authorPublishedContainer}>
                    <p><span>Autor: </span>{autor_nome}</p>
                    <p><span>Publicado em: </span>{created_at}</p>
                </div>
            </div>
        </div>
        <div className={styles.subNavbarContainer}>
            <div className={styles.subElementsContainer}>
                <div className={styles.mediaContainer}>
                    <a className={styles.imageButton} href={imagem_destaque_url} target='_blank'>
                        <div className={styles.seeImageContainer}>
                            <span className={`material-symbols-outlined ${styles.navbarNewsSpan}`}>
                                image
                            </span>
                            <p className={styles.responsiveText}>VER IMAGEM</p>
                        </div>
                    </a>
                    <div className={styles.seeVideoContainer}>
                        <span className={`material-symbols-outlined ${styles.navbarNewsSpan}`}>
                            play_circle
                        </span>
                        <p className={styles.responsiveText}>VER VÍDEO</p>
                    </div>
                </div>
                <div className={styles.socialMediaContainer}>
                    <p className={styles.responsiveText}>Compartilhe:</p>
                    <FaTwitter />
                    <FaWhatsapp />
                    <span className="material-symbols-outlined">
                        link
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavbarNews