const title = "The Eden Dao"
const url = "https://TheEdenDao.com"

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title,
  titleTemplate: "%s | The Eden Dao",
  defaultTitle: "The Eden Dao",
  description: "Unf*** the planet.",
  canonical: url,
  openGraph: {
    url,
    title,
    description: "Unf*** the planet",
    images: [],
    site_name: title,
  },
  twitter: {
    handle: "@TheEdenDao",
    cardType: "summary_large_image",
  },
}

export default defaultSEOConfig
