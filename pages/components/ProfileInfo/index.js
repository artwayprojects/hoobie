import Image from 'next/image'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

import styles from './ProfileInfo.module.scss'

export default function Header({ data }) {
  if (!data) {
    return
  }

  return (
    <>
      <div className={styles.profileImage}>
        <Image
          alt="main-icon"
          src="/assets/hoobe-icon.png"
          width="104"
          height="104"
        />
      </div>

      <h4>{data.user.fullName}</h4>

      <ul className={styles.socialIcons}>
        {data.userSocialPlatform.map((socialInfo) => {
          return (
            <li key={socialInfo.id} className={styles.socialIconWrapper}>
              <div className={styles.socialIcon}>
                <Image
                  src={`/assets/${
                    publicRuntimeConfig.images[socialInfo.socialPlatform]
                  }`}
                  alt={socialInfo.altId}
                  width="24"
                  height="24"
                />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
