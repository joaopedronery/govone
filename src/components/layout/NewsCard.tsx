import styles from './NewsCard.module.css';
import { useNavigate } from 'react-router-dom';


type PropTypes = {
    id: number;
    slug: string;
    titulo: string;
    conteudo: string;
    imagem_destaque_url: string;
    categoria_titulo: string;
    created_at: string;
    updated_at: string;
    resumo: string;
    autor_nome: string;
    descricao_imagem: string;
    categoria_slug: string;
}

function NewsCard({id, descricao_imagem, autor_nome, resumo, slug, titulo, conteudo, imagem_destaque_url, categoria_titulo, created_at, updated_at, categoria_slug}: PropTypes) {
    
    const navigate = useNavigate();

    function characterFilter(string: string, maxChar: number): string {
        if (string.length >= maxChar) {
            let filteredString = string.slice(0, maxChar) + '...';
            return filteredString
        } else {
            return string
        }
    }

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
    
    function handleClick(): void {
        navigate(`/news/${slug}`, {
            state: {
                categoria_slug: categoria_slug,
                id: id
            }
        })
    }

    return (
        <div onClick={handleClick} className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={imagem_destaque_url} />
            </div>
            <div className={styles.infoContainer}>
                <p>
                    {categoria_titulo.toUpperCase()}
                </p>
                <h2>
                    {characterFilter(titulo, 46)}
                </h2>
                <p>
                    {characterFilter(resumo, 130)}
                </p>
                <div className={styles.date}>
                    <div className={styles.iconContainer}>
                        <span className="material-symbols-outlined">
                        edit_calendar
                        </span>
                    </div>
                    <p className={styles.published}>Publicado: </p>
                    <p className={styles.dateP}>
                        {dateFilter(created_at, 'full')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard