import styles from './Home.module.css';
import NewsCard from '../layout/NewsCard';
import {ReactElement, ReactNode, useEffect, useState} from 'react';
import LoadingSpinner from '../layout/LoadingSpinner';
import Navbar from '../layout/Navbar';
import Container from '../layout/Container';
import PageSelector from '../layout/PageSelector';

function Home() {
    
    type NewsType = [{
        id: number;
        resumo: string;
        titulo: string;
        slug: string;
        conteudo: string;
        categoria_titulo: string;
        imagem_destaque_url: string;
        created_at: string;
        updated_at: string;
        autor_nome: string;
        descricao_imagem: string;
        categoria_slug: string;
    }] | []
    
    const [page, setPage] = useState<number>(1);
    const [numberOfPages, setNumberOfPages] = useState<number>(0);
    const [newsData, setNewsData] = useState<NewsType>([]);
    useEffect(() => {
        fetch(`https://noticias-master.govone.digital/api/cms/noticias/?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Api-Key WCRp4mZb.NFlExsno0KHoV9nf4KGKhCfUjufPI4q8'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setNewsData(data.results);
            setNumberOfPages(data.total_pages);
        })
        .catch((error) => console.log(error))
    }, [page])
    
    function handlePageClick(v: number): void {
        setPage(v);
    }

    return (
        <>
        <Navbar />
        <Container>
            <div>
                {!newsData ? <LoadingSpinner /> : (
                    newsData.map((item) => {
                        return (
                            <NewsCard key={item.id} id={item.id} categoria_slug={item.categoria_slug} descricao_imagem={item.descricao_imagem} autor_nome={item.autor_nome} resumo={item.resumo} titulo={item.titulo} slug={item.slug} conteudo={item.conteudo} categoria_titulo={item.categoria_titulo} imagem_destaque_url={item.imagem_destaque_url} created_at={item.created_at} updated_at={item.updated_at} />
                        )
                    })
                )}         
            </div>
            <PageSelector numberOfPages={numberOfPages} page={page} setPage={handlePageClick} />
        </Container>
        </>
    )
}

export default Home