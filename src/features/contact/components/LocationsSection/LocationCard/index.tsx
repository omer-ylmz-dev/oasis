import Office from './variants/Office'
import Showroom from './variants/Showroom'

export const LocationCard = {
  office: Office,
  showroom: Showroom,
} as const

export type LocationCardVariant = keyof typeof LocationCard

export default LocationCard