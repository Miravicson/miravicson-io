import routes from "../data/routes";
import NavLink from "./NavLink";
import PropTypes from "prop-types";

const NavItem = ({ navItem, toggleMenu }) => {
  const { name, link } = navItem;
  return (
    <li className="nav__item" onClick={toggleMenu}>
      <NavLink activeClassName="nav__linkActive" href={link} exact>
        <a className="nav__link">{name}</a>
      </NavLink>
    </li>
  );
};

function Nav({ toggleMenu }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {routes.map((navItem, index) => (
          <NavItem
            navItem={navItem}
            toggleMenu={toggleMenu}
            key={`${index}-${navItem.name}-${navItem.link}`}
          />
        ))}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Nav;
