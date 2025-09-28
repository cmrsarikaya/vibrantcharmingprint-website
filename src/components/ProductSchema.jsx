import React from 'react';
import { Helmet } from 'react-helmet';

const ProductSchema = ({ product }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.images,
    "brand": {
      "@type": "Brand",
      "name": "VibrantCharmingPrint"
    },
    "offers": {
      "@type": "Offer",
      "price": "3.74",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": product.etsy_url,
      "seller": {
        "@type": "Organization",
        "name": "VibrantCharmingPrint"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "75"
    },
    "category": product.category,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Format",
        "value": "Digital Download"
      },
      {
        "@type": "PropertyValue", 
        "name": "Resolution",
        "value": "300 DPI"
      },
      {
        "@type": "PropertyValue",
        "name": "File Type",
        "value": "JPG/PNG"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ProductSchema;
