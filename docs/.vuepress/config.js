module.exports = {
 // title: 'Goldeimer Toolbox',
 // description: 'Just playing around',
  base: "/toolbox/",
  // theme: '@vuepress/theme-blog',
locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE', // this will be set as the lang attribute on <html>
      title: 'Goldeimer Toolbox',
      description: 'Goldeimer DIY Anleitungen'
    },
    '/en/': {
      lang: 'en-GB',
      title: 'Goldeimer Toolbox',
      description: 'Goldeimer DIY Instructions'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Goldeimer Toolbox',
      description: 'Goldeimer Instructions DIY'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Goldeimer Toolbox',
      description: 'Goldeimer Instrucciones de bricolaje'
    }
 
 
  },
	
  //some theme Config
  themeConfig: {
	   locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Sprachen',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Sprachen',
        // text for the edit-on-github link
        editLinkText: 'Diese Seite auf GitHub editieren',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Neue Inhalte verfügbar!",
            buttonText: "Aktualisieren"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/' , ariaLabel: 'Nested' },
      { text: 'Home', link: '/' },
      { text: 'Kompostklo', link: '/klos/' },
      { text: 'Kompostierung', link: '/kompost/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit the page on Github',
        serviceWorker: {
          updatePopup: {
            message: "New content is available",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Nested', link: '/en/nested/' },
      { text: 'Home', link: '/en/' },
      { text: 'Kompostklo', link: '/en/klos/' },
      { text: 'Kompostierung', link: '/en/kompost/' }
        ],
        algolia: {},
        sidebar: {
          '/en/': [/* ... */],
          '/en/nested/': [/* ... */]
        }
      }
    }, 
 
    //logo dir
    logo: '/images/goldeimer_logo.png',

    // Navilinks
    //nav: [
    //  { text: 'Home', link: '/' },
    //  { text: 'Kompostklo', link: '/klos/' },
    //  { text: 'Kompostierung', link: '/kompost/' }
    //],
    // For auto sidebar
    // sidebar: 'auto',
   // Assumes GitHub. Can also be a full GitLab url.
   repo: 'goldeimer/toolbox',
   // Customising the header label
   // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
   repoLabel: 'edit this site!',

   // Optional options for generating "Edit this page" link

   // if your docs are in a different repo from your main project:
   docsRepo: 'goldeimer/toolbox',
   // if your docs are not at the root of the repo:
   docsDir: 'docs',
   // if your docs are in a specific branch (defaults to 'master'):
   docsBranch: 'main',
   // defaults to false, set to true to enable
   editLinks: true,
   // custom text for edit link. Defaults to "Edit this page"
   editLinkText: 'Help us to open source the knowlegde!'  
 }
}
