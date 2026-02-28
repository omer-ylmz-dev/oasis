import { LocalizedString, PaginationMeta } from '@/shared/types/common.types';
import { IconType } from 'react-icons';

export type ProjectStatus = 'under-construction' | 'completed';


export type ProjectType =
  | 'residential-complex'
  | 'apartment'
  | 'villa'
  | 'mixed-use'
  | 'business-center'
  | 'business-park'
  | 'shopping-mall'
  | 'resort';

export interface NearbyPlace {
  name: LocalizedString;
  distance: number;
  type: 'shopping' | 'transport' | 'landmark' | 'education' | 'entertainment' | 'business';
}

export interface ProjectHighlight {
  image: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ProjectFeature {
  icon?: IconType;
  title: LocalizedString;
  description: LocalizedString;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: 'AZN' | 'USD' | 'EUR';
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationDetail {
  slug: string;
  label: LocalizedString;
}

export interface ProjectLocation {
  city: LocationDetail;
  country: LocationDetail;
}



export interface Project {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  overview: {
    status: ProjectStatus;
    type: ProjectType;
    area: number;
    priceRange: PriceRange;
    commencementDate: Date;
    completionDate: Date;
  };
  coverPhoto: string;
  photos: string[];
  address: LocalizedString;
  location: ProjectLocation;
  coordinates: Coordinates;
  nearbyPlaces: NearbyPlace[];
  highlights: ProjectHighlight[];
  features: ProjectFeature[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}





export interface ProjectDetailData extends Omit<
  Project,
  'name' | 'description' | 'address' | 'nearbyPlaces' | 'highlights' | 'features'
> {
  name: string;
  description: string;
  address: string;
  nearbyPlaces: (Omit<NearbyPlace, 'name'> & { name: string })[];
  highlights: (Omit<ProjectHighlight, 'title' | 'description'> & { title: string; description: string })[];
  features: (Omit<ProjectFeature, 'title' | 'description'> & { title: string; description: string, icon?: IconType })[];
}





export interface ProjectListItem {
  id: string;
  slug: string;
  name: string;
  overview: Project['overview'];
  location: ProjectLocation;
  isFeatured: boolean;
  thumbnail: string;
}





export interface ProjectResponse {
  success: boolean;
  data: ProjectListItem[];
  meta: PaginationMeta;
}