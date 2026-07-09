import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { runSummarizationRules } from '../src/lib/memory/summarize'

async function main() {
  // Ensures Payload is initialized under this script's own process
  // before summarize.ts's internal getPayload() (same cached
  // instance via src/lib/payload.ts) is used.
  await getPayload({ config })
  console.log('Running memory summarization rules...')
  await runSummarizationRules()
  console.log('Done. New episodes are unreviewed by default -- check /admin/collections/episodes.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
