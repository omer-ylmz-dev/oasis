import HeroOverlay from './variants/HeroOverlay'
import GalleryOverlay from './variants/GalleryOverlay'
import FeaturedOverlay from './variants/FeaturedOverlay'
import BreadcrumbOverlay from './variants/BreadcrumbOverlay'

export const Overlay = {
  breadcrumb: BreadcrumbOverlay,
  hero: HeroOverlay,
  gallery: GalleryOverlay,
  featured: FeaturedOverlay,
} as const

export type OverlayVariant = keyof typeof Overlay

export default Overlay;