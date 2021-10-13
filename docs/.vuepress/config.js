module.exports = {
  title: 'Goldeimer Toolbox',
  description: 'Just playing around',
  base: "/toolbox/",

  //some theme Config
  themeConfig: {
    //logo dir
    logo: '/assets/img/goldeimer_logo.png',

    // Navilinks
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kompostklo', link: '/klos/' },
      { text: 'Kompostierung', link: '/kompost/' }
    ],
    // For auto sidebar
    sidebar: 'auto',

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
