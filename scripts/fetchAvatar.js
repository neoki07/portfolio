import { writeFileSync } from 'fs'
import { AVATAR_URL } from '../src/constants/me'

const OUTPUT_PATH = './public/__generated__/avatar.png'

const main = async () => {
  const res = await fetch(AVATAR_URL)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  writeFileSync(OUTPUT_PATH, buffer)
}

main()
