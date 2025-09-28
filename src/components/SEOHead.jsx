import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "VibrantCharmingPrint - Premium Digital Wall Art & Printable Designs",
  description = "Transform your space with premium digital wall art. Instant download printable designs including abstract art, botanical prints, and modern minimalist decor.",
  keywords = "digital wall art, printable art, instant download, home decor, wall prints",
  image = "https://vibrantcharmingprint.com/og-image.jpg",
  url = "https://vibrantcharmingprint.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;
