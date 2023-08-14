import Image from 'next/image'
import VideoPlayer from '../VideoPlayer'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

import styles from './Content.module.scss'

export default function Content({ data }) {
  if (!data) {
    return
  }

  return (
    <ul className={styles.content}>
      {data.content.map(({ content }) => {
        if (content.videoId) {
          return <VideoPlayer key={content.id} videoId={content.videoId} />
        }

        return (
          <li key={content.id}>
            <a href={content.link}>
              <Image
                src={`/assets/${
                  publicRuntimeConfig.images[content.socialPlatform]
                }`}
                alt={content.altId}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <section>
                <p>{content.title}</p>
                <Image src="/assets/content.svg" width="24" height="24" />
              </section>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
