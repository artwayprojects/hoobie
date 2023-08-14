import { useState, useEffect } from 'react'
import Head from 'next/head'

import Footer from './components/Footer'
import ProfileInfo from './components/ProfileInfo'
import Content from './components/Content'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .finally(() => setLoading(false))
  }, [])

  if (!data) {
    return
  }

  if (isLoading) {
    return 'loading'
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rubik:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="userPage">
        <header></header>
        <main>
          <ProfileInfo data={data} />

          <Content data={data} />
        </main>

        <Footer />
      </div>
    </>
  )
}
