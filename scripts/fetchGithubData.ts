import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import prettier from 'prettier';

dotenv.config();

function format(code: string) {
  return prettier.format(code, { parser: 'typescript' });
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
  });

  const data = await response.json();

  const weeklyContributions = [[], [], [], [], [], [], []];

  const weeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks;

  weeks.forEach((week: any) => {
    const contributionDaysList = week.contributionDays;

    contributionDaysList.forEach((day: any) => {
      const index = new Date(day.date).getDay();

      weeklyContributions[index].push(day as never);
    });
  });

  return weeklyContributions;
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
  });

  const data = await response.json();
  const languages = data.data.user.repositories.nodes.reduce(
    (acc: any, node: any) => {
      node.languages.edges.forEach((edge: any) => {
        const languageName = edge.node.name;
        const languageSize = edge.size;
        const languageColor = edge.node.color;
        const language = acc.find(
          (language: any) => language.name === languageName
        );
        if (language) {
          language.totalSize += languageSize;
        } else {
          acc.push({
            name: languageName,
            totalSize: languageSize,
            color: languageColor,
          });
        }
      });
      return acc;
    },
    []
  );

  languages.sort((a: any, b: any) => {
    return b.totalSize - a.totalSize;
  });

  return languages;
}

async function main() {
  const weeklyContributions = await getWeeklyContributions();

  writeFileSync(
    'src/data/weeklyContributions.ts',
    `export const weeklyContributions = ${format(
      JSON.stringify(weeklyContributions)
    )}`
  );

  const languages = await getMostUsedLanguages();

  writeFileSync(
    'src/data/mostUsedLanguages.ts',
    `export const mostUsedLanguages = ${format(JSON.stringify(languages))}`
  );
}

main();
