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

    function monthFilter(month: string, template: 'full' | 'abbrev'): string {
        var filteredMonth = '';
        switch (month) {
            case '01':
                if (template === 'full') {
                    filteredMonth = 'Janeiro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Jan';
                }
                break;
            case '02':
                if (template === 'full') {
                    filteredMonth = 'Fevereiro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Fev';
                }
                break;
            case '03':
                if (template === 'full') {
                    filteredMonth = 'Março';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Mar';
                }
                break;
            case '04':
                if (template === 'full') {
                    filteredMonth = 'Abril';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Abr';
                }
                break;
            case '05':
                if (template === 'full') {
                    filteredMonth = 'Maio';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Mai';
                }
                break;
            case '06':
                if (template === 'full') {
                    filteredMonth = 'Junho';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Jun';
                }
                break;
            case '07':
                if (template === 'full') {
                    filteredMonth = 'Julho';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Jul';
                }
                break;
            case '08':
                if (template === 'full') {
                    filteredMonth = 'Agosto';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Ago';
                }
                break;
            case '09':
                if (template === 'full') {
                    filteredMonth = 'Setembro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Set';
                }
                break;
            case '10':
                if (template === 'full') {
                    filteredMonth = 'Outubro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Out';
                }
                break;
            case '11':
                if (template === 'full') {
                    filteredMonth = 'Novembro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Nov';
                }
                break;
            case '12':
                if (template === 'full') {
                    filteredMonth = 'Dezembro';
                } else if (template === 'abbrev') {
                    filteredMonth = 'Dez';
                }
                break;
        }
        return filteredMonth
    }

    function dateFilter(date: string, template: 'full' | 'abbrev'): string {
        const year = date.slice(0, 4);
        const month = monthFilter(date.slice(5, 7), template);
        const day = date.slice(8, 10);
        if (template === 'full') {
            return `${day} de ${month} de ${year}`
        } else if (template === 'abbrev') {
            return `${day} ${month}, ${year}`
        }
        return ''
        }

    return (
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.elementsContainer}>
                <p>{categoria_titulo.toUpperCase()}</p>
                <h1>{titulo}</h1>
                <div className={styles.authorPublishedContainer}>
                    <p><span>Autor: </span>{autor_nome}</p>
                    <p><span>Publicado em: </span>{dateFilter(created_at, 'full')}</p>
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