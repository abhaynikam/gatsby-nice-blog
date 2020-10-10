<h3 align="center">
  Gatsby Nice Blogs
</h3>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new <site-name> https://github.com/gatsbyjs/gatsby-starter-blog
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!


## 🧐 Configure your details

Add your personal details in the `config.js` and restart the server to reflect your changes.

```js
module.exports = {
  url: `Your blog site root url`,
  description: `Your blog site description`,
  pathPrefix: 'Useful when using Github Pages. Add the repository name here.',
  title: `Your blog site title`,
  disqusShortname: 'Your disqus short name to enable comments',
  postsPerPage: 15,
  googleAnalyticsId: 'Your google analytics id',
  useKatex: false,
  author: {
    name: `Your name`,
    summary: `Short summary`,
    social: {
      twitter: `Your twitter account username`,
      github: `abhaynikam`,
    },
  }
};
```

## 🎨 Configure theme color
Update the `--color-primary` color variable to the desired theme primary color.

## 🚢 Deploying using Github page

1.  **Update pathPrefix.**

    Update the `pathPrefix` to the GitHub repository name.

    ```js
    module.exports = {
      pathPrefix: '',
      ...
    }
    ```
2.  **Deploy to GitHub pages!**

    ```shell
    yarn run deploy
    OR
    npm run deploy
    ```

## 🚢 Deploying using Netlify

- Login/Signup to the Netlify GitHub account.
- Authorize the repository access.
- Configure the custom domain on Netlify.

## Author
[Abhay Nikam](https://www.abhaynikam.me/pages/about)
