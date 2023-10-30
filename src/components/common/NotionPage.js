import * as React from "react"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { NotionRenderer } from "react-notion-x"
import dynamic from "next/dynamic"
import { getPageTitle } from "notion-utils"
import { useRouter } from "next/router"

// const Collection = dynamic(() =>
//   import('react-notion-x/build/third-party/collection').then(
//     (m) => m.Collection
//   )
// )

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

export const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  // useful for debugging from the dev console
  // if (typeof window !== "undefined") {
  //   const keys = Object.keys(recordMap?.block || {})
  //   const block = recordMap?.block?.[keys[0]]?.value
  //   const g = window
  //   g.recordMap = recordMap
  //   g.block = block
  // }

  const socialDescription = "nanoHome - Authentic furniture and lighting"
  const socialImage =
    "https://res.cloudinary.com/nanohome/others/social-image.jpg"

  return (
    <>
      <Head>
        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
            <meta name="twitter:description" content={socialDescription} />
          </>
        )}

        {socialImage ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta property="og:image" content={socialImage} />
          </>
        ) : (
          <meta name="twitter:card" content="summary" />
        )}

        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@transitive_bs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        darkMode={false}
        fullPage
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        // header={null}
        components={{
          Image: (props) => (
            <Image
              {...props}
              width={1920}
              height={1080}
              alt="illustration image for doc"
            />
          ),
          nextLink: Link,
          // Collection,
          Modal,
          // Pdf,
        }}
        tw="z-0"

        // NOTE: custom images will only take effect if previewImages is true and
        // if the image has a valid preview image defined in recordMap.preview_images[src]
      />
    </>
  )
}
