import { getThankYouMetadata, ThankYouView } from '@/components/ThankYouView'

export async function generateMetadata() {
  return getThankYouMetadata('/gracias', 'Gracias')
}

export default function GraciasPage() {
  return (
    <ThankYouView headline="Gracias por contactarnos. Un miembro de nuestro equipo le llamará en breve." />
  )
}
