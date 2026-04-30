import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title,
  description = "Aaghaz Foundation is a non-profit founded in 2004 in Lucknow. We support meritorious students from economically weak backgrounds across India through scholarships, financial assistance, mentorship and learning centres.",
  keywords,
  name = "Aaghaz Foundation",
  type = "website",
  image = "/og-image.jpg",
  url,
}: SEOProps) => {
  const siteUrl = "https://aaghazfoundation.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | Aaghaz Foundation</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
