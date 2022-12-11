import styles from './RelatedNewsCard.module.css';

function RelatedNewsCard({imagem_destaque_url, categoria_titulo, created_at}: {imagem_destaque_url: string; categoria_titulo: string; created_at: string}) {
    return (
        <div className={styles.relatedNewsCardContainer}>
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
                        <p>{created_at}</p>
                    </div>
                </div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis incidunt id nisi. </h2>
                <p className={styles.continueReading}>CONTINUE LENDO</p>
            </div>
        </div>
    )
}

export default RelatedNewsCard