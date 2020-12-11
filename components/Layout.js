import user from "../img/user.jpg";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from 'next/image';

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
            <Link href="/">
              <div className="logo"></div>
            </Link>
            <label htmlFor="navi-toggle" className="toggler__button">
              <span className="toggler__icon">&nbsp;</span>
            </label>
          </div>

          <div className="header__container">
            <div className="profile__container">
              <Image
                src={user}
                alt="Victor Ughonu"
                className="profile__picture"
                height="100px"
                width="100px"
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
                    activeClassName="nav__linkActive"
                    href="/"
                    exact
                  >
                    <a className="nav__link">Home</a>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink activeClassName="nav__linkActive" href="/blog" exact>
                    <a className="nav__link">Blog</a>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink href="/shop" activeClassName="nav__linkActive" exact>
                    <a className="nav__link">Shop</a>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink href="/work" activeClassName="nav__linkActive" exact>
                    <a className="nav__link">Work</a>
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    href="/about"
                    activeClassName="nav__linkActive"
                    exact
                  >
                    <a className="nav__link">About</a>
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
