const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oasis.com';


export function createItemListSchema(items: any[], locale: string, type: 'Project' | 'News') {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": type === 'Project' ? "RealEstateListing" : "Article",
                "name": item.title,
                "url": `${SITE_URL}/${locale}/${type.toLowerCase()}s/${item.slug}`,
                "image": item.coverPhoto,
                "description": item.shortDescription
            }
        }))
    };
}


export function createOrganizationSchema(locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "OASIS",
        "url": `${SITE_URL}/${locale}`,
        "logo": `${SITE_URL}/logo.png`,
        "sameAs": ["https://instagram.com/oasis"] 
    };
}




export function createSingleItemSchema(item: any, locale: string, type: 'Project' | 'News') {
  if (type === 'Project') {
    return {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.name,
      "description": item.description,
      "image": item.coverPhoto,
      "url": `${SITE_URL}/${locale}/projects/${item.slug}`,
      "address": item.address 
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": item.title,
    "description": item.shortDescription,
    "image": item.coverPhoto,
    "author": { "@type": "Organization", "name": item.author.name, "avatar": item.author.avatar, role: item.author.role },
    "publisher": { "@type": "Organization", "name": "OASIS", "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
    "datePublished": item.publishedAt
  };
}