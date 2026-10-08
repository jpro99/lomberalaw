/** City hub view types — committed so `next build` works without generated payload-types. */

export type CityHubPracticeArea = { slug?: string; id?: number } | number

export type CityHubOffice = { name?: string | null }

export type CityHubNamedRow = { name?: string | null }

export type CityHubNearbyCity = { id: number | string; slug?: string; name?: string }

export type CityHubService = {
  id: number | string
  title: string
  slug: string
  practiceArea: CityHubPracticeArea
  hasMoneyPage: boolean
}

export type CityHubCity = {
  id: number | string
  slug: string
  name: string
  county: string
  localIntro?: string | null
  servingOffice?: number | CityHubOffice | null
  courthouse?: string | null
  hospitals?: CityHubNamedRow[] | null
  highways?: CityHubNamedRow[] | null
  nearbyCities?: (CityHubNearbyCity | number)[] | null
}

export type CityHubBundle = {
  city: CityHubCity
  services: CityHubService[]
}
