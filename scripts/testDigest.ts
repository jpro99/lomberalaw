import 'dotenv/config'
import { buildAndSendDailyDigest } from '../src/lib/digest'

async function main() {
  console.log('Building daily digest...')
  const result = await buildAndSendDailyDigest()
  if (!result.sent) {
    console.log(`Not sent: ${result.reason}`)
    return
  }
  console.log('Sent. Preview:\n')
  console.log(result.summary)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
