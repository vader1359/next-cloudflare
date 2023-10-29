import * as notion from "../lib/notion"

import { NotionPage } from "@/components/common/NotionPage"
import MaxWidth from "@/components/layout/MaxWidth"
import { useState } from "react"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../lib/config"

export async function getStaticProps() {
  const recordMapHome = await notion.getPage(
    parsePageId(
      "https://iant1359.notion.site/beautifulliving-home-86cf1ed836de4bc2bebcf1bb14d77577?pvs=4"
    )
  )

  const recordMapProjects = await notion.getPage(
    parsePageId(
      "https://iant1359.notion.site/beautifulliving-projects-15e2f342a6194cbea469e92b6c31e7cb?pvs=4"
    )
  )

  return { props: { recordMapHome, recordMapProjects }, revalidate: 5 }
}

const BeautifulLiving = ({ className, recordMapHome, recordMapProjects }) => {
  const [activeTab, setActiveTab] = useState("home")
  return (
    <S.BeautifulLiving className={className}>
      <ul tw="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li tw="mr-2">
          <a
            href="#"
            tw="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group"
            css={
              activeTab === "home" &&
              tw`text-green-600 border-green-500 dark:text-green-500 dark:border-green-500`
            }
            onClick={() => setActiveTab("home")}
          >
            HOME
          </a>
        </li>
        <li tw="mr-2">
          <a
            href="#"
            tw="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group"
            css={
              activeTab === "projects" &&
              tw`text-green-600 border-green-500 dark:text-green-500 dark:border-green-500`
            }
            aria-current="page"
            onClick={() => setActiveTab("projects")}
          >
            PROJECTS
          </a>
        </li>
      </ul>
      {activeTab == "home" ? (
        <NotionPage
          recordMap={recordMapHome}
          previewImagesEnabled={previewImagesEnabled}
        />
      ) : (
        <NotionPage
          recordMap={recordMapProjects}
          previewImagesEnabled={previewImagesEnabled}
        />
      )}
    </S.BeautifulLiving>
  )
}

const S = {}

S.BeautifulLiving = tw(MaxWidth)`border-b border-gray-200 dark:border-gray-700`

export default BeautifulLiving
