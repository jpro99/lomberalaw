import { PRIVACY_POLICY } from '@/lib/legalContent'
import { getLegalPageMetadata, LegalPageView } from '@/components/LegalPageView'

export async function generateMetadata() {
  return getLegalPageMetadata(PRIVACY_POLICY, '/privacy-policy')
}

export default function PrivacyPolicyPage() {
  return <LegalPageView doc={PRIVACY_POLICY} path="/privacy-policy" />
}
