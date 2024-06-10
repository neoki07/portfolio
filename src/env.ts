if (!process.env.GITHUB_NAME) {
  throw new Error('`GITHUB_NAME` is not set')
}

if (!process.env.GITHUB_USERNAME) {
  throw new Error('`GITHUB_USERNAME` is not set')
}

if (!process.env.GITHUB_AVATAR_URL) {
  throw new Error('`GITHUB_AVATAR_URL` is not set')
}

if (!process.env.ZENN_URL) {
  throw new Error('`ZENN_URL` is not set')
}

const { GITHUB_NAME, GITHUB_USERNAME, GITHUB_AVATAR_URL, ZENN_URL } =
  process.env

export { GITHUB_AVATAR_URL, GITHUB_NAME, GITHUB_USERNAME, ZENN_URL }
