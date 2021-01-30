import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css'

function Produto() {
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

  }, [id])

  if (loading) return <di>Carregando...</di>
  if (error) return <p>{error}</p>
  if (produto === null) return null

  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={`Ranek | ${produto.nome}`} description={`Este é um produto: ${produto.nome}`}/>
      {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto;