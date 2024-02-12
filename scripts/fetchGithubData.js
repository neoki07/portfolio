import dotenv from 'dotenv'
import { writeFileSync } from 'fs'
import { join } from 'path'
import prettier from 'prettier'

dotenv.config()

const OUTPUT_DIR = './src/__generated__'

async function format(code) {
  return await prettier.format(code, { parser: 'typescript' })
}

async function getWeeklyContributions() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
          query($username:String!) {
            user(login: $username){
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
      variables: {
        username: process.env.GITHUB_USERNAME,
      },
    }),
  })

  const data = await response.json()

  const weeklyContributions = [[], [], [], [], [], [], []]

  const weeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks

  weeks.forEach((week) => {
    const contributionDaysList = week.contributionDays

    contributionDaysList.forEach((day) => {
      const index = new Date(day.date).getDay()

      weeklyContributions[index].push(day)
    })
  })

  return weeklyContributions
}

async function getMostUsedLanguages() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
          query($username:String!) {
            user(login: $username){
              repositories(first: 100, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
                nodes {
                  languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      variables: {
        username: process.env.GITHUB_USERNAME,
      },
    }),
  })

  const data = await response.json()
  const languages = data.data.user.repositories.nodes.reduce((acc, node) => {
    node.languages.edges.forEach((edge) => {
      const languageName = edge.node.name
      const languageSize = edge.size
      const languageColor = edge.node.color
      const language = acc.find((language) => language.name === languageName)
      if (language) {
        language.totalSize += languageSize
      } else {
        acc.push({
          name: languageName,
          totalSize: languageSize,
          color: languageColor,
        })
      }
    })
    return acc
  }, [])

  languages.sort((a, b) => {
    return b.totalSize - a.totalSize
  })

  return languages
}

async function main() {
  const weeklyContributions = await getWeeklyContributions()

  writeFileSync(
    join(OUTPUT_DIR, 'weeklyContributions.js'),
    `export const weeklyContributions = ${await format(
      JSON.stringify(weeklyContributions),
    )}`,
  )

  const languages = await getMostUsedLanguages()

  writeFileSync(
    join(OUTPUT_DIR, 'mostUsedLanguages.js'),
    `export const mostUsedLanguages = ${await format(
      JSON.stringify(languages),
    )}`,
  )
}

main()
