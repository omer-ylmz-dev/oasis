export const SOCIALS = {
    facebook: {
      url: 'https://facebook.com/aurora.az',
      label: 'Facebook',
      icon: 'Facebook' // lucide-react icon name
    },
    instagram: {
      url: 'https://instagram.com/aurora.az',
      label: 'Instagram',
      icon: 'Instagram'
    },
    linkedin: {
      url: 'https://linkedin.com/company/aurora',
      label: 'LinkedIn',
      icon: 'Linkedin'
    },
    youtube: {
      url: 'https://youtube.com/@aurora',
      label: 'YouTube',
      icon: 'Youtube'
    },
    twitter: {
      url: 'https://twitter.com/aurora_az',
      label: 'Twitter',
      icon: 'Twitter'
    }
  } as const;
  
  export type SocialPlatform = keyof typeof SOCIALS;