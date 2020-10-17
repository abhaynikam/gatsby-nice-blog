import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import FooterSocialIcons from "./footer-social-icons";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let headerSiteText;

  if (isRootPath) {
    headerSiteText = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    headerSiteText = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <header className="global-header">
            {headerSiteText}
            <Link className="header-nav-link" to="/pages/about/">
              About
            </Link>
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          </header>
          <main>{children}</main>
          <footer className="d-flex">
            <div className="copyright-text">
              Copyright © {new Date().getFullYear()},&nbsp;
              <a href="http://abhaynikam.me/">Abhay Nikam</a>
            </div>
            <div className="footer-icon-group">
              <FooterSocialIcons />
            </div>
          </footer>
        </div>
      )}
    </ThemeToggler>
  );
}

export default Layout
