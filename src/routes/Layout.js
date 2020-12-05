import React from "react";
import user from "../assets/img/user.jpg";
import { Link, NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="layout">
        <header className="header">
          <input
            type="checkbox"
            className="toggler__checkbox"
            id="navi-toggle"
          />
          <div className="mobile-nav">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <label htmlFor="navi-toggle" className="toggler__button">
              <span className="toggler__icon">&nbsp;</span>
            </label>
          </div>

          <div className="header__container">
            <div className="profile__container">
              <img
                src={user}
                alt="Victor Ughonu"
                className="profile__picture"
              />
            </div>
            <div className="header__description">
              <span>Software Developer.</span>
              <span>Poet.</span>
              <span>Intel AI Innovator.</span>
              <span>IoT Developer.</span>
            </div>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink
                    className="nav__link"
                    activeClassName="nav__linkActive"
                    to="/"
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className="nav__link"
                    activeClassName="nav__linkActive"
                    to="/blog"
                    exact
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className="nav__link"
                    to="/shop"
                    activeClassName="nav__linkActive"
                    exact
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className="nav__link"
                    to="/work"
                    activeClassName="nav__linkActive"
                    exact
                  >
                    Work
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className="nav__link"
                    to="/about"
                    activeClassName="nav__linkActive"
                    exact
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
            <footer className="header__footer">
              <p>Copyright &copy; 2020 Victor Ughonu.</p>
            </footer>
          </div>
        </header>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
export default Layout;
