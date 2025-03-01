
const siteMetadata = {
  title: 'Tai\'s profile',
  author: 'taitrd',
  name: 'Tai Tran Dinh',
  headerTitle: 'Tai D. Tran',
  description: 'Tai is a Software Engineer in Vietnam. He works in weekdays and he loves to developing his side projects in nights and weekends. That would be amazing when he has a good job with potentialities and professional process.',
  language: 'en-us',
  company: 'Freelancer',
  theme: 'system', // system, dark or light
  avatar: 'https://avatars.githubusercontent.com/u/16987286?s=400&u=1eafe9c3f9a19aed10325177e4c723290cd3b2c5&v=4',
  siteUrl: 'https://taitrd.com',
  siteRepo: 'https://github.com/taitrd/taitrd',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'taitrd49@gmail.com',
  github: 'https://github.com/taitrd',
  gitlab: 'https://gitlab.com/taitrd',
  twitter: 'https://x.com/taitrd92',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/tai-tran-0b68a9187/',
  threads: 'https://www.threads.net/@taitran.bl',
  instagram: 'https://www.instagram.com',
  freelancer: 'https://www.freelancer.com/hireme/nhotsodeep',
  upwork: 'https://www.upwork.com/freelancers/~0187d81af70696e97e',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  icons: {
    icon: [{
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
      href: "/favicon.png",
    }],
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
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
