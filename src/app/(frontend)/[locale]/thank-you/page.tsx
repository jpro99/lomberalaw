import { getThankYouMetadata, ThankYouView } from '@/components/ThankYouView'

export async function generateMetadata() {
  return getThankYouMetadata('/thank-you', 'Thank You')
}

export default function ThankYouPage() {
  return (
    <ThankYouView headline="Thank you for contacting us. One of our staff members will call you shortly." />
  )
}
