import styles from './Home.module.css';
import NewsCard from '../layout/NewsCard';
import {useEffect, useState} from 'react';
import LoadingSpinner from '../layout/LoadingSpinner';

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
    }] | []
    
    const [page, setPage] = useState<number>(1);
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
        .then((data) => setNewsData(data.results))
        .catch((error) => console.log(error))
    }, [page])
    

    return (
        <div>
            {!newsData ? <LoadingSpinner /> : (
                newsData.map((item) => {
                    return (
                        <NewsCard key={item.id} resumo={item.resumo} titulo={item.titulo} slug={item.slug} conteudo={item.conteudo} categoria_titulo={item.categoria_titulo} imagem_destaque_url={item.imagem_destaque_url} created_at={item.created_at} updated_at={item.updated_at} />
                    )
                })
            )}         
        </div>
    )
}

export default Home