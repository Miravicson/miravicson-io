import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './nav-link';
import Nav from './nav';
import ProgressiveImage from 'react-progressive-image';

function Layout({ children }) {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => setMenuState((prevState) => !prevState);

  const closeMenu = () => setMenuState(false);

  return (
    <div className="container mx-auto">
      <div className="layout">
        <header className="header">
          <input
            type="checkbox"
            className="toggler__checkbox"
            id="navi-toggle"
            checked={menuState}
            readOnly
          />
          <div className="mobile-nav">
            <Link href="/">
              <div className="logo" onClick={closeMenu}></div>
            </Link>
            <label
              htmlFor="navi-toggle"
              className="toggler__button"
              onClick={toggleMenu}
            >
              <span className="toggler__icon">&nbsp;</span>
            </label>
          </div>

          <div className="header__container">
            <div className="profile__container">
              <ProgressiveImage
                src="/img/victor-ughonu.jpg"
                placeholder="/img/victor-ughonu-small.jpg"
              >
                {(src, loading) => (
                  <img
                    style={{ opacity: loading ? 0.5 : 1 }}
                    src={src}
                    alt="Victor Ughonu"
                    className="profile__picture"
                    height="100px"
                    width="100px"
                  />
                )}
              </ProgressiveImage>
            </div>
            <div className="header__description">
              <span className="header__tag">Victor Chiagozie Ughonu</span>
              <span className="header__tag">Software Engineer</span>{' '}
              {/** create a sliding animation */}
            </div>
            <Nav toggleMenu={toggleMenu} />
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
