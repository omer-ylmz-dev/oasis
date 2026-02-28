import FeaturedSlider from "./variants/FeaturedSlider";
import GallerySlider from "./variants/GallerySlider";
import HeroSlider from "./variants/HeroSlider";

export const Slider = {
    hero: HeroSlider,
    gallery: GallerySlider,
    featured: FeaturedSlider
}

export type SliderVariant = keyof typeof Slider;

export default Slider;