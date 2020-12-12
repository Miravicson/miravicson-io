import routes from "../data/routes";
import NavLink from "./NavLink";
const NavItem = ({ navItem }) => {
  const { name, link } = navItem;
  return (
    <li className="nav__item">
      <NavLink activeClassName="nav__linkActive" href={link} exact>
        <a className="nav__link">{name}</a>
      </NavLink>
    </li>
  );
};

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {routes.map((navItem) => (
          <NavItem navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
