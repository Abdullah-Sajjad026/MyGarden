// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  fullName: 'Abdullah Sajjad',
  title: "Abdullah's Portfolio & Online Garden",
  author: 'Abdullah Sajjad',
  headerTitle: '',
  description: `A digital representation of my own little oasis, where I can cultivate my passions and share them with the world. My motivation for creating this portfolio is to showcase my work and share my knowledge with the community. I am passionate about building products that are user-friendly, scalable and solve real-world problems. Whether you're a potential client, collaborator, or employer, I hope you'll find something here that resonates with you. 🌎`,
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.abdullahsajjad.me',
  siteRepo: 'https://github.com/Abdullah-Sajjad026/portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar3.jpg',
  socialBanner: '/static/images/social-banner.jpg',
  email: 'contact@abdullahsajjad.me',
  github: 'https://github.com/Abdullah-Sajjad026',
  twitter: 'https://twitter.com/Abdullah_webdev',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/abdullahsajjad026',
  locale: 'en-US',
  analyticsURL: process.env.NEXT_APP_UMAMI_SHARE_URL,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata
