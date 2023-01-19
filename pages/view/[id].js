import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import Item from '../../src/component/Item'

export default function Post({ item, name }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }
  // const { id } = router.query
  // const [item, setItem] = useState({})
  // const [isLoading, setIsLoading] = useState(true)

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     setItem(res.data)
  //     setIsLoading(false)
  //   })
  // }

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData()
  //   }
  // }, [id])

  return (
    <>
      {/* {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )} */}
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name}환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  )
}
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    // paths: [
    //   { params: { id: '630' } },
    //   { params: { id: '600' } },
    //   { params: { id: '620' } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  }
}
