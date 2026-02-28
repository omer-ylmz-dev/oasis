import { ModalType } from '@/shared/types/common.types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export const MODAL_COMPONENTS: Record<ModalType, ComponentType<any>> = {
  MOBILE_MENU: dynamic(() => import('../../layout/Navbar/mobile-menu'), { ssr: false }),
  IMAGE_VIEWER: dynamic(() => import('@/shared/components/ui/Modal/image-lightbox'), { ssr: false }),
  LIGHTBOX_SLIDER: dynamic(() => import('@/shared/components/ui/Modal/lightbox-slider'), { ssr: false }),
};