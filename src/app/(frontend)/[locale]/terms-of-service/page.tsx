import { TERMS_OF_SERVICE } from '@/lib/legalContent'
import { getLegalPageMetadata, LegalPageView } from '@/components/LegalPageView'

export async function generateMetadata() {
  return getLegalPageMetadata(TERMS_OF_SERVICE, '/terms-of-service')
}

export default function TermsOfServicePage() {
  return <LegalPageView doc={TERMS_OF_SERVICE} path="/terms-of-service" />
}
