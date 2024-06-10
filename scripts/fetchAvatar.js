import { writeFileSync } from 'fs'
import { GITHUB_AVATAR_URL } from '../src/env'

const OUTPUT_PATH = './public/__generated__/avatar.png'

const main = async () => {
  const res = await fetch(GITHUB_AVATAR_URL)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  writeFileSync(OUTPUT_PATH, buffer)
}

main()
