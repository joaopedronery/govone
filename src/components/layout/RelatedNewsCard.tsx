import styles from './RelatedNewsCard.module.css';

function RelatedNewsCard({imagem_destaque_url, categoria_titulo}: {imagem_destaque_url: string; categoria_titulo: string}) {
    return (
        <div className={styles.relatedNewsCardContainer}>
            <div className={styles.imageContainer}>
                <img src=''></img>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis incidunt id nisi. </h2>
        </div>
    )
}

export default RelatedNewsCard