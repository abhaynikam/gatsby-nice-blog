<h1 align="center">
  Gatsby Nice Blogs
</h1>

<p align="center">
  <a href="https://github.com/abhaynikam/gatsby-nice-blog/blob/master/LICENSE.txt"><img alt="GitHub" src="https://img.shields.io/github/license/abhaynikam/gatsby-nice-blog?style=flat-square"></a>
  <a href="https://nostalgic-liskov-e76c32.netlify.app/"><img alt="GitHub" src="https://img.shields.io/badge/-Demo-blue?style=flat-square"></a>
</p>

Nice blogs is a simple minimal blog template boilerplate built using Gatsby. Kickoff your blog website with simple steps and focus more on content than building and shipping a blog website.

Check the [live demo on netlify](https://nostalgic-liskov-e76c32.netlify.app/) or [live demo on GitHub pages](https://abhaynikam.github.io/gatsby-nice-blog/).

![root](https://user-images.githubusercontent.com/7736232/95664178-0ea08200-0b63-11eb-988c-452b23c57074.png)
![blog](https://user-images.githubusercontent.com/7736232/95664177-0a746480-0b63-11eb-9cbf-d542b828a6fb.png)

## Features
- Pagniated minimalistic blog template.
- Google analytics.
- XML sitemap for helping search engines to find site.
- SEO compliant.
- Comments via Disqus.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the nice blogs boilerplate template.

    ```shell
    gatsby new <site-name> https://github.com/abhaynikam/gatsby-nice-blog
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

Watch the [video](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git) by Netlify team and learn deploying using Git.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/abhaynikam/gatsby-nice-blog. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/abhaynikam/gatsby-nice-blog/blob/master/CODE_OF_CONDUCT.md).

## License

The boilerplate blog template is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Author
[Abhay Nikam](https://www.abhaynikam.me/pages/about)

## Contributors
[Chinmay Mehta](https://github.com/chinmaym07)