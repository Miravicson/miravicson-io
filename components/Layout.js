import user from "../img/user.jpg";
import Link from "next/link";
import NavLink from "./NavLink";
import Nav from "./Nav";

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
              <img
                src={user}
                alt="Victor Ughonu"
                className="profile__picture"
                height="100px"
                width="100px"
              />
            </div>
            <div className="header__description">
              <span className="header__tag">Victor Chiagozie Ughonu</span>
              <span className="header__tag">Software Engineer</span>{" "}
              {/** create a sliding animation */}
            </div>
            <Nav />
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
