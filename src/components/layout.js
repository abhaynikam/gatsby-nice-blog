import React from "react";
import { Link } from "gatsby";
import FooterSocialIcons from "./footer-social-icons";
import { dualMode } from '../utils/style-changer';
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
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {headerSiteText}
        <Link className="header-nav-link" to="/pages/about/">
          About
        </Link>
        <div class="sun-moon" onClick={dualMode}>
          <input type="checkbox" />
          <span class="circle large"></span>
          <span class="circle small"></span>
        </div>
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
  );
}

export default Layout
