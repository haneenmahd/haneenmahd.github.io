import React from "react";
import Banner from "../images/banner.jpeg";

export const SEO = () => {
  const seo = {
    title: `Haneen | Founder / Product Designer`,
    siteUrl: `https://haneenmahdin.vercel.app`,
    lang: 'en',
    description: "My name is Haneen Mahdin, I'm a software developer and designer working and living in India. I help brands to create memorable experiences through expressive design.",
    twitterUsername: '@HaneenMahdin',
    url: 'https://twitter.com/HaneenMahdin',
    image: Banner,
    keywords: ['developer', 'designer', 'product designer', 'open source contributor', 'open source', 'developer advocate', 'nodejs', 'design', 'great design', 'great app', 'entrepreneur', 'content creator', 'best', 'near me']
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="google-site-verification" content="gMh6iXEuJLTxNWmsDP1PTyFmEdubu7mOHpImHz4_ZAI" />
      <meta name="keywords" content={seo.keywords.join(',')} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
    </>
  );
};
