import NavbarNews from '../layout/NavbarNews';
import styles from './SpecificNews.module.css';
import Container from '../layout/Container';
import {useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import RelatedNewsCard from '../layout/RelatedNewsCard';

function SpecificNews() {
    
    const { state } = useLocation();
    const { slug } = useParams();
    const [newsData, setNewsData] = useState<any>({imagem_destaque_url: '..........', autor_nome: '..........', categoria_titulo: '..........', created_at: '..........', titulo: '..........', descricao_imagem: '........', conteudo: '<h1>..........</h1>', });
    const [relatedNewsData, setRelatedNewsData] = useState([{categoria_slug: '.......', id: 1, slug: '........', imagem_destaque_url: '..........', autor_nome: '..........', categoria_titulo: '..........', created_at: '..........', titulo: '..........', descricao_imagem: '........', conteudo: '<h1>..........</h1>', }, {id: 2, imagem_destaque_url: '..........', autor_nome: '..........', categoria_titulo: '..........', created_at: '..........', titulo: '..........', descricao_imagem: '........', conteudo: '<h1>..........</h1>', }, {id: 3, imagem_destaque_url: '..........', autor_nome: '..........', categoria_titulo: '..........', created_at: '..........', titulo: '..........', descricao_imagem: '........', conteudo: '<h1>..........</h1>', }])
    
    console.log(state.categoria_slug);
    
    function filterRelatedNews(relatedNews: {id: number, imagem_destaque_url: string, autor_nome: string, categoria_titulo: string, created_at: string, titulo: string, descricao_imagem: string, conteudo: string, }[]): any {
        let index = 0;
        let limit = 0;
        let filteredArray = [];

        while (limit < 3) {
            if (relatedNews[index].id === state.id) {
                index = index + 1;
                console.log(`catch ${relatedNews[index].id} ${state.id}`)
                continue
            } else {
                filteredArray.push(relatedNews[index]);
                index = index + 1;
                limit = limit + 1;
                continue
            }
        }

        console.log(filteredArray);

        return filteredArray

    }

    useEffect(() => {
        fetch(`https://noticias-master.govone.digital/api/cms/noticias/?slug=${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Api-Key WCRp4mZb.NFlExsno0KHoV9nf4KGKhCfUjufPI4q8' 
        }
    })
    .then((res) => res.json())
    .then((data) => setNewsData(data.results[0]))
    }, [slug])
    
    useEffect(() => {
        fetch(`https://noticias-master.govone.digital/api/cms/noticias/?categoria_slug=${state.categoria_slug}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Api-Key WCRp4mZb.NFlExsno0KHoV9nf4KGKhCfUjufPI4q8' 
        }
        })
        .then((res) => res.json())
        .then((data) => setRelatedNewsData(filterRelatedNews(data.results)))
    }, [slug])

    console.log(relatedNewsData);

    return (
        
        <>
        <NavbarNews imagem_destaque_url={newsData.imagem_destaque_url} autor_nome={newsData.autor_nome} categoria_titulo={newsData.categoria_titulo} created_at={newsData.created_at} titulo={newsData.titulo}/>
        <Container>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageSubContainer}>
                        <img src={newsData.imagem_destaque_url}/>
                    </div>
                    <p>Foto: {newsData.descricao_imagem}</p>
                </div>
                <div className={styles.contentContainer}>
                    {parse(newsData.conteudo)}
                </div>
                <p className={styles.categoryParagraph}>Categorias: <span>{newsData.categoria_titulo}</span></p>
            </div>
        </Container>
        <hr></hr>
        <Container customClass='noMinHeight'>
            <div className={styles.relatedNewsContainer}>
                <div className={styles.relatedNewsTitleContainer}>
                    <h2>Conteúdo relacionado</h2>
                    <p>Confira as últimas notícias do estado</p>
                </div>
                <div className={styles.relatedNewsCardsContainer}>
                    {relatedNewsData.map((item: any) => (
                        <RelatedNewsCard key={item.id} id={item.id} categoria_slug={item.categoria_slug} slug={item.slug} titulo={item.titulo} created_at={item.created_at} imagem_destaque_url={item.imagem_destaque_url} categoria_titulo={item.categoria_titulo}/>
                    ))}
                </div>
            </div>
        </Container>
        </>
    )
}

export default SpecificNews