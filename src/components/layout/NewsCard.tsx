import styles from './NewsCard.module.css';
import { useNavigate } from 'react-router-dom';


type PropTypes = {
    slug: string;
    titulo: string;
    conteudo: string;
    imagem_destaque_url: string;
    categoria_titulo: string;
    created_at: string;
    updated_at: string;
    resumo: string;
}

function NewsCard({resumo, slug, titulo, conteudo, imagem_destaque_url, categoria_titulo, created_at, updated_at}: PropTypes) {
    
    const navigate = useNavigate();

    function characterFilter(string: string, maxChar: number): string {
        if (string.length >= maxChar) {
            let filteredString = string.slice(0, maxChar) + '...';
            return filteredString
        } else {
            return string
        }
    }

    function monthFilter(month: string): string {
        var filteredMonth = '';
        switch (month) {
            case '01':
            filteredMonth = 'Janeiro';
            break;
            case '02':
            filteredMonth = 'Fevereiro';
            break;
            case '03':
            filteredMonth = 'Março';
            break;
            case '04':
            filteredMonth = 'Abril';
            break;
            case '05':
            filteredMonth = 'Maio';
            break;
            case '06':
            filteredMonth = 'Junho';
            break;
            case '07':
            filteredMonth = 'Julho';
            break;
            case '08':
            filteredMonth = 'Agosto';
            break;
            case '09':
            filteredMonth = 'Setembro';
            break;
            case '10':
            filteredMonth = 'Outubro';
            break;
            case '11':
            filteredMonth = 'Novembro';
            break;
            case '12':
            filteredMonth = 'Dezembro';
            break;
        }
        return filteredMonth
    }

    function dateFilter(date: string): string {
        const year = date.slice(0, 4);
        const month = monthFilter(date.slice(5, 7));
        const day = date.slice(8, 10);
        return `${day} de ${month} de ${year}`
    }
    
    function handleClick(): void {
        navigate(`/news/${slug}`)
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
                        {dateFilter(created_at)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard