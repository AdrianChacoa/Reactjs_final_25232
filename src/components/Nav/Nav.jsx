import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";


export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to={"/"} className="nav-link">
            <img src="/images/logo.jpeg" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/fundasyprotectores"} className="nav-link">
                Fundas y Protectores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/cablesycargadores"} className="nav-link">
                Cables y Cargadores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/audio"} className="nav-link">
                Audio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/otros"} className="nav-link">
                Otros
              </Link>
            </li>
           
            <li className="nav-item">
              <Link to={"/carrito"} className="nav-link">
                Carrito
              </Link>
              {getTotalItems() > 0 && (
                <span className="in-cart">{getTotalItems()}</span>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};