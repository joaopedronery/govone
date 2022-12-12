import styles from './RelatedNewsCard.module.css';
import { useNavigate } from 'react-router-dom';


function RelatedNewsCard({imagem_destaque_url, categoria_titulo, created_at, titulo, slug, categoria_slug, id}: {imagem_destaque_url: string; categoria_titulo: string; created_at: string; titulo: string; slug:string; categoria_slug: string; id: number}) {
    const navigate = useNavigate();
    
    function handleClick(): void {
        navigate(`/news/${slug}`, {
            state: {
                categoria_slug: categoria_slug,
                id: id
            }
        })
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
    
    return (
        <div onClick={handleClick} className={styles.relatedNewsCardContainer}>
            <div className={styles.imageContainer}>
                <img src={imagem_destaque_url}></img>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.subTitleContainer}>
                    <p>{categoria_titulo.toUpperCase()}</p>
                    <div className={styles.dateContainer}>
                        <span className="material-symbols-outlined">
                            edit_calendar
                        </span>
                        <p>{dateFilter(created_at, 'abbrev')}</p>
                    </div>
                </div>
                <h2>{titulo} </h2>
                <p className={styles.continueReading}>CONTINUE LENDO</p>
            </div>
        </div>
    )
}

export default RelatedNewsCard